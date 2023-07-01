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
    <button onClick={onClick}>
      {
        text
      }
    </button>
  )
};

