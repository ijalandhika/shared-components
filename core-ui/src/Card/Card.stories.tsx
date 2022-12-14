import React from 'react';
import { Story } from "@storybook/react";
import { Card as C, CardProps } from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Component',
  component: C,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CardProps> = (args) => <C {...args} />;

export const Card = Template.bind({});
Card.args = {
  facility: 'A’dvanced Center for Daycare Surgery Abu Dhabi (ACDS)',
  practitioner: 'Dr. Rashid al Ahmed',
  images: {
    url: 'https://img.okadoc.co/plain/200x200/uploads/doctor/photo/65657/okadoc-doctor-psychiatrist-azeri-mednet-out-network-20220208095351.jpg', 
    alt: 'this is just testing '
  }
}
