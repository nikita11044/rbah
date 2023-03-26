import { Story } from '@storybook/react';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreProvider, IGlobalStateSchema } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';

const defaultReducers: DeepPartial<ReducersMapObject<IGlobalStateSchema>> = {
    login: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<IGlobalStateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={defaultReducers}>
        <StoryComponent />
    </StoreProvider>
);
