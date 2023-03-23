import { IGlobalStateSchema } from 'app/providers/StoreProvider/config/stateSchema';

export const getIsLoginLoading = (state: IGlobalStateSchema) => state?.login?.isLoading || false;
