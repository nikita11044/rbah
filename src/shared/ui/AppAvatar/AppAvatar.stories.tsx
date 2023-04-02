import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppAvatar } from 'shared/ui/AppAvatar/AppAvatar';
import AvatarTestImg from './storybook-avatar-test.jpeg';

export default {
    title: 'shared/Avatar',
    component: AppAvatar,
} as ComponentMeta<typeof AppAvatar>;

const Template: ComponentStory<typeof AppAvatar> = (args) => <AppAvatar {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    size: 150,
    src: AvatarTestImg,
};
export const Small = Template.bind({});

Small.args = {
    size: 50,
    src: AvatarTestImg,
};
