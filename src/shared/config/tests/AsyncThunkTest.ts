import { IGlobalStateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';
import axios, { AxiosStatic } from 'axios';

type ActionCreator<Return, Arg, RejectVal> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectVal }>

jest.mock('axios');

const axiosMock = jest.mocked(axios, true);

export class AsyncThunkTest<Return, Arg, RejectVal> {
    dispatch: jest.MockedFn<any>;

    getState: () => IGlobalStateSchema;

    api: jest.MockedFunctionDeep<AxiosStatic>;

    navigate: jest.MockedFn<any>;

    actionCreator: ActionCreator<Return, Arg, RejectVal>;

    constructor(actionCreator: ActionCreator<Return, Arg, RejectVal>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.navigate = jest.fn();
        this.api = axiosMock;
    }

    async call(arg: Arg) {
        const action = this.actionCreator(arg);
        return action(
            this.dispatch,
            this.getState,
            { api: this.api, navigate: this.navigate },
        );
    }
}
