/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { type LabelProps } from './Label.types';

export const Label: React.FC<LabelProps> = ({ text, ...props }) => {
  return (
    <h1>{text}</h1>
  );
};

export default Label;
