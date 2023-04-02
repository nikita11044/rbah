import { IGlobalStateSchema } from 'app/providers/StoreProvider';

export const getProfileReadOnly = (state: IGlobalStateSchema) => state.profile?.readonly;
