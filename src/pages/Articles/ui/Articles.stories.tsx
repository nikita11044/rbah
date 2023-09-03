import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Articles from './Articles';

export default {
    title: 'pages/Articles',
    component: Articles,
} as ComponentMeta<typeof Articles>;
const Template: ComponentStory<typeof Articles> = (args) => <Articles {...args} />;

export const Default = Template.bind({});
Default.args = {};
