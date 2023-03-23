import { IGlobalStateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getUserAuthData = (state: IGlobalStateSchema) => state.user.auth;
