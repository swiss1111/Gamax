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
      <div className="cardHeader">
        <h2 className="title"><a href={`/user/${result.owner.user_id}`}>{result.owner.display_name}</a> - {result.title}</h2>
      </div>
      <div className="cardBody">
        <div className="detail">Megválaszolt válasz: {result.is_answered}</div>
        <div className="detail">Olvasók száma: {result.view_count}</div>
        <div className="detail">Válaszok száma: {result.answer_count}</div>
        <div className="detail">Pont: {result.score}</div>
        <div className="detail">Utolsó aktivitás dátuma: {result.last_activity_date}</div>
        <div className="detail">Létrehozás dátuma: {result.creation_date}</div>
        <div className="detail">Utolsó módosítás dátuma: {result.last_edit_date}</div>
      </div>
      <div className="cardFooter">
        {result.tags.map(tag => <div key={tag} className="tag">{tag}</div>)}
      </div>
    </div>
  );
}

export default SearchResultItem;
