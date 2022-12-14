import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  // const buttonHandler = () => {
  //   console.log("users Added");
  // };

  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
