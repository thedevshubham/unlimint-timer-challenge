import React from "react";
import "./ButtonComponent.scss";

const ButtonComponent = ({ handleButtonClick }) => {
  return (
    <div className="button__wrapper">
      <button className="button__button-add" onClick={handleButtonClick}>
        Add
      </button>
    </div>
  );
};

export default ButtonComponent;
