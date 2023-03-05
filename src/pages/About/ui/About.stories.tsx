import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import About from 'pages/About/ui/About';

export default {
    title: 'pages/About',
    component: About,
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About />;

export const Light = Template.bind({});

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK)];
