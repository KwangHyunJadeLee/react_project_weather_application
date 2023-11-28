import React from "react";
import styles from "./Input.module.css";

// Reusable Input Component

const Input = (props) => {
  return (
    <div className={`${styles.control}`}>
      <label>{props.label}</label>
      <input
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
};

export default Input;
