import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink } from 'shared/ui';

export default {
    title: 'shared/AppLink',
    component: AppLink,
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    children: 'primary',
};

export const PrimaryDark = Template.bind({});

PrimaryDark.args = {
    children: 'primary dark',
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Secondary = Template.bind({});

Secondary.args = {
    children: 'secondary',
};

export const SecondaryDark = Template.bind({});

SecondaryDark.args = {
    children: 'secondary dark',
};

SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];
