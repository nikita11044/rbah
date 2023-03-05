import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from 'widgets/Modal/Modal';

export default {
    title: 'widgets/Modal',
    component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

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
