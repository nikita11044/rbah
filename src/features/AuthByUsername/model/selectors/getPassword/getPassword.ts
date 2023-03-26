import { IGlobalStateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getPassword = (state: IGlobalStateSchema) => state?.login?.password || '';
