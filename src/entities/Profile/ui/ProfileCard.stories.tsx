import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ProfileCard } from 'entities/Profile';
import { Currency } from 'entities/Currency';
import AvatarTestImg from 'shared/assets/tests/storybook-avatar-test.jpeg';
import { Country } from 'entities/Country/model/types/country';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    data: {
        username: 'admin',
        age: 22,
        country: Country.RUS,
        firstName: 'firstName',
        lastName: 'lastName',
        city: 'Moscow',
        currency: Currency.RUB,
        avatar: AvatarTestImg,
    },
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true,
};
