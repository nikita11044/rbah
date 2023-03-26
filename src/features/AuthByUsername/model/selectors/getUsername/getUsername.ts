import { IGlobalStateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getUsername = (state: IGlobalStateSchema) => state?.login?.username || '';
