import React, {useState, useEffect} from "react";
import {TopBadgesParams, BadgesResult} from "../../interfaces/stackExchangeInterface";
import {badges} from "../../apiControllers/stackExchangeApi";

import "./TopBadge.scss";

const defaultState: BadgesResult = {
  items: [],
}

const useBadges = (userId: number) => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<BadgesResult>(defaultState);

  const onLoad = () => {
    setLoading(true);

    badges(userId).then(resp => {
      setResults(resp);
    }).catch(err => {
      console.error('TopBadge.tsx onLoad', err);
      setResults(defaultState);
    }).finally(() => {
      setLoading(false);
    });
  };


  return {loading, results, onLoad};
};

function TopBadge(props: TopBadgesParams) {
  const {userId} = props
  const {loading, results, onLoad} = useBadges(userId);

  const badges = results?.items;

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="topBadge">
      {loading && <div>Loading...</div>}
      {badges?.map(badge => <div className="badgeRow">
        <div className={`badgeName ${badge.rank}Badge`}>
          {badge.name}
        </div>
        <div className="badgeDetails">
          <div>
            {badge.badge_type}
          </div>
          <div>
            {badge.rank}
          </div>
          <div>
            {badge.award_count}
            <span className="badgeCount"> count</span>
          </div>
        </div>
      </div>)}
    </div>
  );
}

export default TopBadge;
