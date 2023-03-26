import { IGlobalStateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getLoginError = (state: IGlobalStateSchema) => state?.login?.error || '';
