import React from "react";
import { ReactComponent as Close } from "../../resources/images/Close.svg";
import "./CardComponent.scss";

const CardComponent = ({ id, seconds, createdAt, handleDelete }) => {
  return (
    <div className="card__container">
      <div className="card__close-icon">
        <Close onClick={() => handleDelete(id)} />
      </div>
      <div className="card__content">
        <div className="card__seconds">{Number(seconds).toLocaleString()}</div>
        <div className="card__date-and-time">{createdAt}</div>
      </div>
    </div>
  );
};

export default CardComponent;
