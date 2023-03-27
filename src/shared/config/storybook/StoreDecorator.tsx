import { Story } from '@storybook/react';
import { IGlobalStateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducerList } from 'shared/lib/DinamicDataLoader/DynamicDataLoader';

const defaultReducers: ReducerList = {
    login: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (state: DeepPartial<IGlobalStateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={defaultReducers}>
        <StoryComponent />
    </StoreProvider>
);
