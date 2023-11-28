/**
 * Button Component
 *
 * Reusable button component with customizable styles.
 */

import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      type={props.type || "button"} // Button type (default: button)
      className={`${styles.button} ${styles.className}`} // CSS modules styles
      onClick={props.onClick} // Click event handler
      disabled={props.disabled} // Disable button if true
      background-color={`props.background-color`} // Background color (customizable)
      border={props.border} // Border style (customizable)
    >
      {props.children} {/* Content inside the button */}
    </button>
  );
};

export default Button;
