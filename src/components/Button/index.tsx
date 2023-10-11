/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { type ButtonProps } from './Button.types';
import CardImage from '../../assets/images/bg-card-front.png';
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
    <div>
      <img
        src={CardImage}
        aria-label='famcy'
      />
      <button className={styles.container} onClick={onClick} disabled={disabled}>
        {
          text
        }
      </button>
    </div>
  );
};

export default Button;
