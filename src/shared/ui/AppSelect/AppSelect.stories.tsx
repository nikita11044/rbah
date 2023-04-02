import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppSelect } from 'shared/ui/AppSelect/AppSelect';

export default {
    title: 'shared/Select',
    component: AppSelect,
} as ComponentMeta<typeof AppSelect>;

const Template: ComponentStory<typeof AppSelect> = (args) => <AppSelect {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    label: 'Выберите значение',
    options: [
        { value: '1', content: 'Значение 1' },
        { value: '2', content: 'Значение 2' },
    ],
};
