import React, { useEffect, useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Birthdays from "./persondata";

function BirthdayList() {
  const [count, setCount] = useState(0);
  const countBirthday = useRef(0);
  
  const handleCount = () => {
    setCount(countBirthday.current);
  }

  useEffect(() => {
    setTimeout(handleCount, 2000);
  }, [])
  ;

  const trackBirthday = (data) => {
    let currentYear = new Date().getFullYear();
    const d = new Date(data).setFullYear(currentYear);
    const birthday = new Date(d).toDateString();
    const currentDate = new Date().toDateString();

    if (currentDate.indexOf(birthday) > -1) {
      countBirthday.current = countBirthday.current + 1;

      return (
        <span className="check">
          <FontAwesomeIcon icon={faCheck} />
        </span>
      );
    } else {
      return (
        <span className="uncheck">
          <FontAwesomeIcon icon={faCheck} />
        </span>
      );
    }
  };

  function getAge(data) {
    const today = new Date();
    const birthDate = new Date(data);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const [birthdays, setBirthdays] = useState(Birthdays);

  const removeHandle = () => {
    setBirthdays([]);
    setCount(0);
  }

  return (
    <>
      <div className="content">
        <div className="top-label">
          <p>
            <span>{count}</span> person has Birthday today
          </p>
        </div>
        <ul>
          {birthdays.map(function (data) {
            const { id, img, name, birthday } = data;

            return (
              <li key={id}>
                <div className="img">
                  <div className="picture">
                    <img src={img} alt="" />
                  </div>
                  <div className="name">
                    <p>{name}</p>
                    <p>{getAge(birthday)} Years</p>
                  </div>
                </div>
                <div className="information">
                  <p>{birthday}</p>
                  <p>{trackBirthday(birthday)}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <button className="btn" onClick={removeHandle}>Clear All</button>
      </div>
    </>
  );
}


export default BirthdayList;
