import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppSkeleton } from './AppSkeleton';

export default {
    title: 'shared/Skeleton',
    component: AppSkeleton,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppSkeleton>;

const Template: ComponentStory<typeof AppSkeleton> = (args) => <AppSkeleton {...args} />;

export const Default = Template.bind({});
Default.args = { width: '100%', height: 200 };

export const Circle = Template.bind({});
Circle.args = { borderRadius: '50%', width: 100, height: 100 };

export const DefaultDark = Template.bind({});
DefaultDark.args = { width: '100%', height: 200 };
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = { borderRadius: '50%', width: 100, height: 100 };
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
