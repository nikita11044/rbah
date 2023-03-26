import { IGlobalStateSchema } from 'app/providers/StoreProvider';

export const getIsProfileLoading = (state: IGlobalStateSchema) => state.profile?.isLoading || false;
