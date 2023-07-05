/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { type ButtonProps } from './Button.types';
import styles from './styles.module.css';

export const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <button className={styles.container} onClick={onClick} disabled={disabled}>
      {
        text
      }
    </button>
  );
};

export default Button;
