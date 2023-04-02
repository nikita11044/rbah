import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectCountry } from 'entities/Country/ui/SelectCountry/SelectCountry';

export default {
    title: 'entity/SelectCountry',
    component: SelectCountry,
} as ComponentMeta<typeof SelectCountry>;

const Template: ComponentStory<typeof SelectCountry> = (args) => <SelectCountry {...args} />;

export const Primary = Template.bind({});
