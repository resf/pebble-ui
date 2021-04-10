import React from 'react';
import { useTheme } from '../Theme';

const defaultColor = ['white', 'gray-900', 'gray-200'];

export type InfoBarProps = {
  /**
   * The color to render the button as.
   */
  color?: 'light' | 'primary' | 'danger' | 'warning' | 'info' | 'like';

  /**
   * The label to show on the infobar.
   */
  label?: string;

  /**
   * The link to render on the right-hand side
   */
  link?: string;
};

/**
 * An informational notification bar, designed to deliver static or 'flash'
 * messages.
 * @param args The arguments to configure this InfoBar instance.
 */
const InfoBar = ({ color = 'info', label, link }: InfoBarProps) => {
  const { colors: colorDefs } = useTheme();

  const background = (colorDefs[color] ?? defaultColor)[0];
  const foreground = (colorDefs[color] ?? defaultColor)[1];

  const classes = `bg-${background} text-${foreground} flex items-center justify-between p-4 text-sm font-semibold rounded-lg shadow-md`;

  let args = {};
  if (link) {
    args = { href: link };
  }

  args = { className: classes, ...args };

  return link ? (
    <a {...args}>
      <div>
        <span>{label}</span>
      </div>
    </a>
  ) : (
    <div {...args}>
      <div>
        <span>{label}</span>
      </div>
    </div>
  );
};

export default InfoBar;
