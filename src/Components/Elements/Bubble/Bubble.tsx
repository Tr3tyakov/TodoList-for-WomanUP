import React from 'react';
import './bubble.scss';
import createBubble from './createBubble';

interface IBubble {
  children?: React.ReactNode;
  component?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Bubble: React.FC<IBubble> = ({ children, onClick, style, className, component = 'div' }) => {
  function onClickElement(
    currentTarget: HTMLElement,
    pageX: number,
    pageY: number,
    component: string,
  ) {
    createBubble(currentTarget, pageX, pageY, component);
    onClick && onClick();
  }

  return (
    <div
      style={style}
      className={className ? className + ' bubble' : 'bubble'}
      onClick={(e) => onClickElement(e.currentTarget, e.pageX, e.pageY, component)}>
      {children}
    </div>
  );
};

export default Bubble;
