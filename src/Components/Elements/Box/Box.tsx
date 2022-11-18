import React from 'react';

type typeJustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';

type typeDisplay = 'flex' | 'block' | 'inline-block' | 'inline-flex';
type typeOverflow = 'auto' | 'hidden' | 'scroll';
type typeFlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';
type typeAlignItems = 'center' | 'end' | 'flex-start' | 'flex-end' | 'revert';
export type typeCursor = 'pointer' | 'none	' | 'progress' | 'wait' | 'move' | 'not-allowed';
type typeWrap = 'wrap' | 'wrap-reverse';

interface IBox {
  children?: React.ReactNode;
  sx?: object;
  component?: string;
  justify?: typeJustifyContent;
  display?: typeDisplay;
  gap?: string;
  width?: string;
  height?: string;
  overflow?: typeOverflow;
  p?: string;
  m?: string;
  align?: typeAlignItems;
  flexDirection?: typeFlexDirection;
  wrap?: typeWrap;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onDoubleClick?: (e: React.MouseEvent<HTMLElement>) => void;
  className?: string;
  backgroundColor?: string;
  boradius?: string;
  border?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
  borderLeft?: string;
  cursor?: typeCursor;
  boxShadow?: string;
  position?: string;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}

const Box: React.FC<IBox> = ({
  children,
  sx,
  component = 'div',
  justify,
  display,
  gap,
  p,
  m,
  wrap,
  width,
  height,
  align,
  overflow,
  flexDirection,
  onClick,
  className,
  backgroundColor,
  boradius,
  border,
  borderBottom,
  borderLeft,
  borderRight,
  borderTop,
  position,
  top,
  bottom,
  right,
  left,
  boxShadow,
  cursor,
  onDoubleClick,
}) => {
  const style = {
    ...{
      justifyContent: justify,
      display,
      gap,
      width,
      height,
      padding: p,
      margin: m,
      overflow,
      flexDirection,
      flexWrap: wrap,
      alignItems: align,
      backgroundColor: backgroundColor,
      borderRadius: boradius,
      border,
      borderBottom,
      borderTop,
      borderLeft,
      boxShadow,
      top,
      bottom,
      right,
      left,
      borderRight,
      cursor,
      position,
    },
    ...sx,
  };
  return React.createElement(component, { style, className, onClick, onDoubleClick }, children);
};
export default Box;
