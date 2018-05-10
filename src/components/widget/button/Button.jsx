import React from 'react';
import styles from './Button.css';

const Button = (props) => {
  console.log(props.isOpened);
  return (
    <input
      className={props.isOpened ? styles.buttonOpened : styles.button}
      type="button"
      onClick={props.onHandleOpen}
    />
  );
};

export default Button;
