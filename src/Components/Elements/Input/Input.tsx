import React from 'react';
import './input.scss';
type typeInputVariant = 'primary' | 'secondary' | 'main';
type ITypeFamily = '"Montserrat", sans-serif';

interface IInput {
  fullWidth?: boolean;
  type?: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: any;
  value?: string | number;
  placeholder?: string;
  variant?: typeInputVariant;
  color?: string;
  height?: string;
  fontSize?: string;
  width?: string;
  fontFamily?: ITypeFamily;
  defaultValue?: string;
  p?: string;
}

const Input: React.FC<IInput> = ({
  variant,
  fullWidth,
  value,
  type,
  className,
  onChange,
  onSubmit,
  placeholder,
  fontFamily,
  color,
  height,
  defaultValue,
  fontSize,
  width,
  p,
}) => {
  return (
    <input
      style={{
        width: fullWidth ? '100%' : width,
        height: height,
        color: color,
        fontFamily: fontFamily,
        padding: p,
        fontSize,
      }}
      className={`${className} ${variant}`}
      type={type}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
      onSubmit={onSubmit}
    />
  );
};

export default Input;
