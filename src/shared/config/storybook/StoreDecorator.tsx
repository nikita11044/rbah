import { Story } from '@storybook/react';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreProvider, IGlobalStateSchema } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<IGlobalStateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state}>
        <StoryComponent />
    </StoreProvider>
);
