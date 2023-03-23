import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [StoreDecorator({
    login: {
        username: 'username',
        password: 'password',
    },
})];

export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [StoreDecorator({
    login: {
        username: 'username',
        password: 'password',
        error: 'ERROR',
    },
})];

export const isLoading = Template.bind({});
isLoading.args = {};
isLoading.decorators = [StoreDecorator({
    login: {
        isLoading: true,
    },
})];
