import React from 'react';
import Button, { ButtonProps } from './';

export default {
  title: 'Forms/Button',
  component: Button,
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

const Template = (args: ButtonProps) => <Button {...args} />;

export const Basic = Template.bind({});
// @ts-ignore
Basic.args = {
  label: 'Hello, world.',
};

export const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  label: 'Connect to Rocky Linux Account',
  color: 'primary',
};

export const Outline = Template.bind({});
// @ts-ignore
Outline.args = {
  label: 'Save Tags',
  color: 'primary',
  outline: true,
  size: 'small',
};

export const Danger = Template.bind({});
// @ts-ignore
Danger.args = {
  label: 'Delete item',
  color: 'danger',
  outline: true,
};
