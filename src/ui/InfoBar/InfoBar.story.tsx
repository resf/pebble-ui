import React from 'react';
import InfoBar, { InfoBarProps } from '.';

export default {
  title: 'InfoBar',
  component: InfoBar,
  argTypes: {
    color: {
      options: ['primary', 'light', 'danger', 'warning', 'info', 'like'],
      control: {
        type: 'select',
      },
    },
    size: {
      control: {
        type: 'radio',
        options: ['small', 'normal', 'large'],
      },
    },
    onClick: { action: 'clicked', control: { disable: true } },
  },
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

const Template = (args: InfoBarProps) => <InfoBar {...args} />;

export const Basic = Template.bind({});
// @ts-ignore
Basic.args = {
  color: 'info',
  label: 'Download the latest release of Rocky Linux: RC-1! 🎉',
};

export const Success = Template.bind({});
// @ts-ignore
Success.args = {
  color: 'success',
  label: 'Successfully updated package `srpmproc`.',
};

export const Danger = Template.bind({});
// @ts-ignore
Danger.args = {
  color: 'danger',
  label: 'Failed to save project settings.',
};

export const Like = Template.bind({});
// @ts-ignore
Like.args = {
  color: 'like',
  label: '@gmk liked your post "Well done Rocky team on a good product"!',
};
