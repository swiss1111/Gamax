import React, {useState, useEffect} from "react";
import {useLoaderData} from "react-router-dom";
import {UserResult} from "../../interfaces/stackExchangeInterface";
import {user} from "../../apiControllers/stackExchangeApi";

import "./UserView.scss";
import Badge from "../../components/Badge/Badge";
import TopBadge from "../../components/TopBadge/TopBadge";

const defaultState: UserResult = {
  items: [],
}

const getTimeSinceDate = (dateString: number): { years: number, months: number, days: number } => {
  const today = new Date();
  const date = new Date(dateString);
  let years = today.getFullYear() - date.getFullYear();
  let months = (today.getMonth() + 1) - (date.getMonth() + 1);
  let days = today.getDate() - date.getDate();

  if (months < 0 || (months === 0 && days < 0)) {
    years--;
    if (months < 0) {
      months += 12;
    }
  }

  if (days < 0) {
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += lastDayOfMonth;
    months--;
  }

  return {years, months, days};
}

const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<UserResult>(defaultState);
  const {userId} = useLoaderData() as any;

  const onLoad = () => {
    setLoading(true);

    user(userId).then(resp => {
      setResults(resp);
    }).catch(err => {
      console.error('UserView.tsx onLoad', err);
      setResults(defaultState);
    }).finally(() => {
      setLoading(false);
    });
  };


  return {loading, results, onLoad, userId};
};

function UserView() {
  const {loading, results, onLoad, userId} = useUser();

  const userData = results?.items?.[0];

  const timeSinceDate = getTimeSinceDate(userData?.creation_date * 1000);

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="userView">
      {loading && <div>Loading...</div>}
      {userData && (
        <div className="userContainer">
          <div className="userHeader">
            <div>
              <img src={userData.profile_image} alt={userData.display_name}/>
            </div>
            <div className="userDetails">
              <h2 className="name"><a href={userData.link} target="_blank">{userData.display_name}</a></h2>
              <div>User status: {userData.user_type}</div>
              <div>{`It has been ${timeSinceDate.years} years, ${timeSinceDate.months} months, and ${timeSinceDate.days} days since registration.`}</div>
            </div>
            <div className="userStats">
              <h3>Reputation: {userData.reputation}</h3>
              <p className="reputationChangesTitle">Reputation changes:</p>
              <ul className="reputationChanges">
                <li>Year: {userData.reputation_change_year}</li>
                <li>Quarter: {userData.reputation_change_quarter}</li>
                <li>Month: {userData.reputation_change_month}</li>
                <li>Week: {userData.reputation_change_week}</li>
                <li>Day: {userData.reputation_change_day}</li>
              </ul>
            </div>
          </div>
          <div className="badgeContainer">
            <Badge badgeNumber={userData.badge_counts.gold} type="gold"/>
            <Badge badgeNumber={userData.badge_counts.silver} type="silver"/>
            <Badge badgeNumber={userData.badge_counts.bronze} type="bronze"/>
          </div>
          <div>
            <TopBadge userId={userId}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserView;
