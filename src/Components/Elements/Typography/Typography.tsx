import React from 'react';
import { typeCursor } from '../Box/Box';

type typeTypography = 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type typePaletteTheme = 'main' | 'secondary' | 'primary' | 'grey' | 'white';
type FontWeight = 200 | 300 | 400 | 500 | 600 | 700 | 900;

interface ITypography {
  component?: typeTypography;
  children?: React.ReactNode;
  className?: string;
  gutterButtom?: boolean;
  sx?: CSSStyleSheet;
  fontSize?: string;
  color?: typePaletteTheme | any;
  fontWeight?: FontWeight;
  cursor?: typeCursor;
}

const Typography: React.FC<ITypography> = ({
  component = 'p',
  children,
  sx,
  className,
  gutterButtom,
  fontSize = '16px',
  color,
  fontWeight,
  cursor,
}) => {
  const style = {
    ...{
      fontSize,
      marginBottom: gutterButtom ? '8px' : '',
      fontWeight,
      cursor,
      color,
    },
    ...sx,
  };
  return React.createElement(component, { style, className }, children);
};

export default Typography;
