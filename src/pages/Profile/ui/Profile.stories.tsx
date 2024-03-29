import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator';
import { Country } from 'entities/Country/model/types/country';
import { Currency } from 'entities/Currency';
import AvatarTestImg from 'shared/assets/tests/storybook-avatar-test.jpeg';
import Profile from './Profile';

export default {
    title: 'pages/Profile',
    component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile />;

export const Light = Template.bind({});

Light.decorators = [StoreDecorator({
    profile: {
        formData: {
            username: 'admin',
            age: 22,
            country: Country.RUS,
            firstName: 'firstName',
            lastName: 'lastName',
            city: 'Moscow',
            currency: Currency.RUB,
            avatar: AvatarTestImg,
        },
    },
})];

export const Dark = Template.bind({});

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    profile: {
        formData: {
            username: 'admin',
            age: 22,
            country: Country.RUS,
            firstName: 'firstName',
            lastName: 'lastName',
            city: 'Moscow',
            currency: Currency.RUB,
            avatar: AvatarTestImg,
        },
    },
})];
