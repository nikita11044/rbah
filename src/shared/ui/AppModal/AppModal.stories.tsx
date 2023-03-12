import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppModal } from 'shared/ui/AppModal/AppModal';

export default {
    title: 'widgets/AppModal',
    component: AppModal,
} as ComponentMeta<typeof AppModal>;

const Template: ComponentStory<typeof AppModal> = (args) => <AppModal {...args} />;

export const Light = Template.bind({});

Light.args = {
    isOpen: true,
    children: 'light',
};

export const Dark = Template.bind({});

Dark.args = {
    isOpen: true,
    children: 'dark',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
