import React from 'react'
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  size,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {
        text
      }
    </button>
  )
};

export default Button;
