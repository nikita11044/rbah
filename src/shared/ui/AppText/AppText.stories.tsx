import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppText, AppTextTheme, TextSize } from './AppText';

export default {
    title: 'shared/Text',
    component: AppText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppText>;

const Template: ComponentStory<typeof AppText> = (args) => <AppText {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'Primary title',
    text: 'Description title',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Error title',
    text: 'Error description',
    theme: AppTextTheme.ERROR,
};

export const TitleOnly = Template.bind({});
TitleOnly.args = {
    title: 'Title only',
};

export const DescriptionOnly = Template.bind({});
DescriptionOnly.args = {
    text: 'Description only',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Primary dark title',
    text: 'Primary dark description',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleOnlyDark = Template.bind({});
TitleOnlyDark.args = {
    title: 'Title only dark',
};
TitleOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TextOnlyDark = Template.bind({});
TextOnlyDark.args = {
    text: 'Text only dark',
};
TextOnlyDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    text: 'Size L text',
    title: 'Size L title',
    size: TextSize.L,
};
