import { IGlobalStateSchema } from 'app/providers/StoreProvider';

export const getProfileFormData = (state: IGlobalStateSchema) => state.profile?.formData;
