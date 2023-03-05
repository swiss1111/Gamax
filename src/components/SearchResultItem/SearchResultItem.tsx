import React from "react";
import {SearchItem} from "../../interfaces/stackExchangeInterface";
import "./SearchResultItem.scss"

interface Props {
  result: SearchItem,
}

function SearchResultItem(props: Props) {
  const {result} = props
  return (
    <div className="resultCard">
      <div className="leftContainer">
        <div className="score">{result.score} score</div>
        {result.is_answered && (<div className="isAnswered">Answered</div>)}
        <div className="views">{result.view_count} view</div>
      </div>
      <div className="body">
        <h2 className="title"><a href={result.link} target="_blank">{result.title}</a></h2>
        <div className="footer">
          <div className="tagContainer">
            {result.tags.map(tag => <div key={tag} className="tag">{tag}</div>)}
          </div>
          <div>
            <a href={`/user/${result.owner.user_id}`}>{result.owner.display_name}</a>
            <span> - </span>
            {new Date(result.creation_date * 1000).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResultItem;
