import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import Profile from './Profile';

export default {
    title: 'pages/Profile',
    component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile />;

export const Light = Template.bind({});

Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];
