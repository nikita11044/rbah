import { IGlobalStateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreator<Return, Arg, RejectVal> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectVal }>

export class AsyncThunkTest<Return, Arg, RejectVal> {
    dispatch: jest.MockedFn<any>;

    getState: () => IGlobalStateSchema;

    actionCreator: ActionCreator<Return, Arg, RejectVal>;

    constructor(actionCreator: ActionCreator<Return, Arg, RejectVal>) {
        this.actionCreator = actionCreator;
        this.dispatch = jest.fn();
        this.getState = jest.fn();
    }

    async call(arg: Arg) {
        const action = this.actionCreator(arg);
        return action(this.dispatch, this.getState, undefined);
    }
}
