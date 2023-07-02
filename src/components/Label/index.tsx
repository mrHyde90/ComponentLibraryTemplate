import React from 'react'
import { LabelProps } from './Label.types'

export const Label: React.FC<LabelProps> = ({ text, ...props }) => {
  return (
    <h1>{text}</h1>
  )
}

export default Label;
