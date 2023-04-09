import { IGlobalStateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getUserInit = (state: IGlobalStateSchema) => state.user._init;
