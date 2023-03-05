import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppBtn, AppButtonTheme } from './AppBtn';

export default {
    title: 'shared/Button',
    component: AppBtn,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppBtn>;

const Template: ComponentStory<typeof AppBtn> = (args) => <AppBtn {...args} />;

export const Outline = Template.bind({});

Outline.args = {
    children: 'outline',
};

export const OutlineDark = Template.bind({});

OutlineDark.args = {
    children: 'outline',
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});

Clear.args = {
    children: 'clear',
    theme: AppButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});

ClearDark.args = {
    children: 'clear',
    theme: AppButtonTheme.CLEAR,
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];
