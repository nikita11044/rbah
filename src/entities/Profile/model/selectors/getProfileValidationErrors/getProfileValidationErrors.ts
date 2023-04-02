import { IGlobalStateSchema } from 'app/providers/StoreProvider';

export const getProfileValidationErrors = (state: IGlobalStateSchema) => state.profile?.validationErrors;
