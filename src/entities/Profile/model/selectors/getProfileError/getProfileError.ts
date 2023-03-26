import { IGlobalStateSchema } from 'app/providers/StoreProvider';

export const getProfileError = (state: IGlobalStateSchema) => state.profile?.error || '';
