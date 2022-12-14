import React from 'react';

import { Skeleton as S} from "./Skeleton";

export default {
    title: 'Component',
    component: S,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

  const Template = () => <S />;

  export const Skeleton = Template.bind({});