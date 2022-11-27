import React, { useEffect, useState } from "react";
import "./App.scss";
import ButtonComponent from "./components/buttonComponent/ButtonComponent";
import CardComponent from "./components/cardComponent/CardComponent";
import InputComponent from "./components/inputComponent/InputComponent";
import { v4 as uuid } from "uuid";
import moment from "moment";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [timerList, setTimerList] = useState([]); // id, seconds, createAt, timerId
  const [inputError, setInputError] = useState("");
  const secRegex = /^\d+$/;

  const isValidSecond = (sec) => secRegex.test(String(sec));

  useEffect(() => {
    setInputError("");
  }, [inputValue]);

  useEffect(() => {
    let timerId;
    if (timerList.length > 0)
      timerId = setInterval(() => {
        refreshTimerList();
      }, 10000);
    return () => clearInterval(timerId);
  }, [timerList]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value.trim());
  };

  const handleButtonClick = () => {
    if (!isValidSecond(inputValue) || inputValue <= 0) {
      setInputError("Please enter valid seconds.");
    } else {
      setTimerList([
        ...timerList,
        {
          id: uuid(),
          seconds: inputValue,
          createdAt: moment().format("DD.MM.YYYY hh:mm:ss")
        },
      ]);
    }
  };

  const handleDelete = (id) => {
    setTimerList([...timerList.filter((item) => item?.id !== id)]);
  };

  const refreshTimerList = () => {
    let newTimeList = [];
    timerList.forEach((item) => {
      if (item?.seconds > 0 && Math.sign(item.seconds - 10) !== -1)
        newTimeList.push({
          ...item,
          seconds: item.seconds - 10,
        });
    });
    setTimerList([...newTimeList]);
  };

  return (
    <div className="app__container">
      <div className="app__left-child">
        {timerList.map((item) => {
          return (
            <React.Fragment key={item?.id}>
              <CardComponent
                id={item?.id}
                seconds={item?.seconds}
                createdAt={item?.createdAt}
                handleDelete={handleDelete}
              />
            </React.Fragment>
          );
        })}
      </div>
      <div className="app__right-child">
        <div className="app__right__action-items">
          <div className="app__right-heading">New Timer</div>
          <InputComponent
            handleInputChange={handleInputChange}
            inputValue={inputValue}
          />
          <span className="app__right-input-error">{inputError}</span>
          <ButtonComponent handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </div>
  );
}

export default App;
