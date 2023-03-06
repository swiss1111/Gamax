import React from "react";
import {BadgeItem} from "../../interfaces/stackExchangeInterface";
import "./Badge.scss"

function Badge(props: BadgeItem) {
  const {badgeNumber, type} = props
  return (
    <div className="badge">
      <img className="badgeIcon" src={require(`../../assets/images/badge-${type}.png`)} alt="badge"/>
      <div>{`${type} badges`}</div>
      <div className="badgeNumber">{badgeNumber}</div>
    </div>
  );
}

export default Badge;
