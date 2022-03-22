import React, { useState } from "react";
import styles from "./Room.module.css";

type Props = {};

const Room = (props: Props) => {
  return (
    <>
      <Button />
      <Button />
      <Button />
      <Temprature />
    </>
  );
};

const Button = (props: Props) => {
  const [isLit, setIsLit] = useState(true);
  return (
    <div className={isLit ? styles.lit : styles.dark}>
      <span>{isLit ? "Lights On😂" : "Lights Off😓"}</span>
      <button onClick={() => setIsLit((prevState) => !prevState)}>
        On/Off
      </button>
    </div>
  );
};

const Temprature = (props: Props) => {
  const [temp, setTemp] = useState(72);

  return (
    <div>
      <span>{temp}</span>
      <button onClick={() => setTemp((prevState) => prevState + 1)}>+</button>
      <button onClick={() => setTemp((prevState) => prevState - 1)}>-</button>
    </div>
  );
};

export default Room;
