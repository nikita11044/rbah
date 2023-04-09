import {
    IProfileSchema,
    profileActions, profileReducer, updateProfile,
} from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ProfileValidationError } from 'entities/Profile/model/types/profileSchema';

const data = {
    username: 'admin',
    age: 22,
    country: Country.RUS,
    firstName: 'firstName',
    lastName: 'lastName',
    city: 'Moscow',
    currency: Currency.RUB,
};

describe('profileSlice', () => {
    test('set readonly', () => {
        const state: DeepPartial<IProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as IProfileSchema,
            profileActions.setReadonly(true),
        )).toEqual({ readonly: true });
    });

    test('cancel edit', () => {
        const state: DeepPartial<IProfileSchema> = { profileData: data, formData: { username: '' } };

        expect(profileReducer(
            state as IProfileSchema,
            profileActions.cancelEdit(),
        )).toEqual({
            readonly: true,
            validationErrors: undefined,
            profileData: data,
            formData: data,
        });
    });

    test('update profile', () => {
        const state: DeepPartial<IProfileSchema> = { formData: { username: '123' } };

        expect(profileReducer(
            state as IProfileSchema,
            profileActions.updateProfile({
                username: '123456',
            }),
        )).toEqual({
            formData: { username: '123456' },
        });
    });

    test('update profile pending', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: false,
            validationErrors: [ProfileValidationError.SERVER_ERROR],
        };

        expect(profileReducer(
            state as IProfileSchema,
            updateProfile.pending,
        )).toEqual({
            isLoading: true,
            validationErrors: undefined,
        });
    });

    test('update profile fulfilled', () => {
        const state: DeepPartial<IProfileSchema> = {
            isLoading: true,
        };

        expect(profileReducer(
            state as IProfileSchema,
            updateProfile.fulfilled(data, ''),
        )).toEqual({
            isLoading: false,
            validationErrors: undefined,
            readonly: true,
            formData: data,
            profileData: data,
        });
    });
});
