import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppBtn, AppBtnSize, AppBtnTheme } from './AppBtn';

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

export const OutlineSizeL = Template.bind({});

OutlineSizeL.args = {
    children: 'outline size L',
    size: AppBtnSize.L,
};

export const OutlineSizeXL = Template.bind({});

OutlineSizeXL.args = {
    children: 'outline size XL',
    size: AppBtnSize.XL,
};

export const OutlineDark = Template.bind({});

OutlineDark.args = {
    children: 'outline',
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear = Template.bind({});

Clear.args = {
    children: 'clear',
    theme: AppBtnTheme.CLEAR,
};

export const ClearDark = Template.bind({});

ClearDark.args = {
    children: 'clear',
    theme: AppBtnTheme.CLEAR,
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});

Background.args = {
    children: 'background',
    theme: AppBtnTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});

BackgroundInverted.args = {
    children: 'background inverted',
    theme: AppBtnTheme.BACKGROUND_INVERTED,
};

export const SquareSizeM = Template.bind({});

SquareSizeM.args = {
    children: '>',
    theme: AppBtnTheme.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: AppBtnTheme.BACKGROUND_INVERTED,
    square: true,
    size: AppBtnSize.L,
};

export const SquareSizeXl = Template.bind({});

SquareSizeXl.args = {
    children: '>',
    theme: AppBtnTheme.BACKGROUND_INVERTED,
    square: true,
    size: AppBtnSize.XL,
};

export const Disabled = Template.bind({});

Disabled.args = {
    children: 'disabled',
    theme: AppBtnTheme.OUTLINE,
    disabled: true,
};
