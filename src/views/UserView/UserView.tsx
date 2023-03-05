import React, {useState, useEffect} from "react";
import {useLoaderData} from "react-router-dom";
import {UserResult} from "../../interfaces/stackExchangeInterface";
import {user} from "../../apiControllers/stackExchangeApi";

const defaultState: UserResult = {
  items: [],
}

const useUser = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<UserResult>(defaultState);
  const {userId} = useLoaderData() as any;

  const onLoad = () => {
    setLoading(true);

    user(userId).then(resp => {
      setResults(resp);
      setLoading(false);
    }).catch(err => {
      console.error('UserView.tsx onLoad', err);
      setResults(defaultState);
      setLoading(false);
    })
  };

  return {loading, results, onLoad};
};

function UserView() {
  const {loading, results, onLoad} = useUser();

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="userView">
      <div className="resultsWrapper">
        {loading && <div>Loading...</div>}
        {results.items.length > 0 && (
          <div className="resultsContainer">
            {results.items.map((result) => (
              <div key={result.user_id}>
                {result.display_name}
                <img src={result.profile_image} alt={result.display_name}/>
                <div></div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default UserView;
