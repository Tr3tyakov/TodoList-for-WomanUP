import React from 'react';
import './button.scss';
import Bubble from '../Bubble/Bubble';

export interface IButton {
  img?: string;
  children?: React.ReactNode;
  color?: string;
  alt?: string;
  onClick: (e?: any) => void;
  style?: React.CSSProperties;
  className?: string;
}

const Button: React.FC<IButton> = ({ img, children, color, style, onClick, alt, className }) => {
  return (
    <Bubble onClick={onClick} className={`${className} button`} style={style}>
      <div>
        {children && <p style={{ color }}>{children}</p>}
        {img && <img src={img} alt={alt ? alt : 'Изображение'} />}
      </div>
    </Bubble>
  );
};

export default Button;
