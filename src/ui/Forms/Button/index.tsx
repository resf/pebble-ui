import React, { MouseEventHandler } from 'react';
import { useTheme } from '../../Theme';
import '../../style.css';

const defaultColor = ['white', 'gray-900', 'gray-200'];

export type ButtonProps = {
  /**
   * The button label to display.
   */
  label: string;

  /**
   * The function to run when the button is clicked.
   */
  onClick?: MouseEventHandler;

  /**
   * The size to render the button in.
   */
  size?: 'small' | 'normal' | 'large';

  /**
   * The color to render the button as.
   */
  color?: 'light' | 'primary' | 'danger' | 'warning' | 'info' | 'like';

  /**
   * Whether or not to make the button an outline button.
   */
  outline?: boolean;

  /**
   * The maximum (tailwind) size constraint for the button.
   */
  maxWidth?: string;

  /**
   * The (tailwind) size for the button.
   */
  width?: string;
};

/**
 * A basic forms button component.
 * @param args The arguments to build the button with.
 */
const Button = ({
  color = 'light',
  label,
  onClick,
  size,
  outline,
  maxWidth,
  width,
}: ButtonProps) => {
  const { colors: colorDefs } = useTheme();

  const background = (colorDefs[color] ?? defaultColor)[0];
  const foreground = (colorDefs[color] ?? defaultColor)[1];
  const ring = (colorDefs[color] ?? defaultColor)[2];

  let classes = '';

  switch (size) {
    case 'small':
      classes += 'px-2 py-1 text-sm';
      break;

    case 'large':
      classes += 'px-5 py-3 text-normal';
      break;

    case 'normal':
    default:
      classes += 'px-4 py-2 text-normal';
      break;
  }

  if (outline) {
    if (color == 'light') {
      classes += ` bg-white text-${foreground} border-2 border-${foreground} focus:border-${foreground} hover:text-white hover:bg-${foreground}`;
    } else {
      classes += ` bg-white text-${background} border-2 border-${background} focus:border-${background} hover:text-${foreground} hover:bg-${background}`;
    }
  } else {
    classes += ` bg-${background} text-${foreground} border-2 border-${background}`;
  }

  if (maxWidth) classes += ` max-w-${maxWidth}`;
  if (width) classes += ` w-${width}`;

  const className = `${classes} focus:outline-none focus:ring focus:ring-${ring} shadow hover:shadow-md transition duration-100 rounded-lg`;

  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
