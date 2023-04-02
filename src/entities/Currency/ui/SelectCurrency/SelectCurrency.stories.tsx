import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectCurrency } from 'entities/Currency/ui/SelectCurrency/SelectCurrency';

export default {
    title: 'entity/SelectCurrency',
    component: SelectCurrency,
} as ComponentMeta<typeof SelectCurrency>;

const Template: ComponentStory<typeof SelectCurrency> = (args) => <SelectCurrency {...args} />;

export const Primary = Template.bind({});
