import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppInput } from 'shared/ui';

export default {
    title: 'shared/Input',
    component: AppInput,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppInput>;

const Template: ComponentStory<typeof AppInput> = (args) => <AppInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Placeholder',
    value: 'value',
};
