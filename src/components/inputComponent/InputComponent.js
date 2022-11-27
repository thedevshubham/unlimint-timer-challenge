import React from "react";
import "./InputComponent.scss";

const InputComponent = ({ handleInputChange, inputValue }) => {
  return (
    <div className="input__container">
      <input
        type="text"
        className="input__input-field"
        onChange={handleInputChange}
        value={inputValue}
      />
    </div>
  );
};

export default InputComponent;
