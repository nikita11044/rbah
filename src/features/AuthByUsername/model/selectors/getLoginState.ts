import { IGlobalStateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getLoginState = (state: IGlobalStateSchema) => state?.login;
