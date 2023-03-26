import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Main from './Main';

export default {
    title: 'pages/Main',
    component: Main,
} as ComponentMeta<typeof Main>;

const Template: ComponentStory<typeof Main> = (args) => <Main />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
