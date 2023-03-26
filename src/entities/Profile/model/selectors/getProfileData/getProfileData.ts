import { IGlobalStateSchema } from 'app/providers/StoreProvider';

export const getProfileData = (state: IGlobalStateSchema) => state.profile?.profileData;
