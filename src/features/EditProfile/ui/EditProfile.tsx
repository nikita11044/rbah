import { useSelector } from 'react-redux';
import {
    getIsProfileLoading,
    getProfileError,
    getProfileFormData,
    getProfileReadOnly,
    profileActions,
    ProfileCard,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';

export const EditProfile = () => {
    const isLoading = useSelector(getIsProfileLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadOnly);
    const formData = useSelector(getProfileFormData);

    const dispatch = useAppDispatch();

    const handleFirstNameChange = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstName: value || '' }));
    }, [dispatch]);

    const handleLastNameChange = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastName: value || '' }));
    }, [dispatch]);

    const handleAgeChange = useCallback((value?: string) => {
        // TODO: add number validation regex
        dispatch(profileActions.updateProfile({ age: Number(value || 0) }));
    }, [dispatch]);

    const handleCityChange = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const handleUsernameChange = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const handleAvatarChange = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const handleCurrencyChange = useCallback((value: Currency) => {
        dispatch(profileActions.updateProfile({ currency: value }));
    }, [dispatch]);

    const handleCountryChange = useCallback((value: Country) => {
        dispatch(profileActions.updateProfile({ country: value }));
    }, [dispatch]);

    return (
        <ProfileCard
            data={formData}
            isLoading={isLoading}
            error={error}
            readOnly={readOnly}
            handleFirstNameChange={handleFirstNameChange}
            handleLastNameChange={handleLastNameChange}
            handleAgeChange={handleAgeChange}
            handleCityChange={handleCityChange}
            handleUsernameChange={handleUsernameChange}
            handleAvatarChange={handleAvatarChange}
            handleCurrencyChange={handleCurrencyChange}
            handleCountryChange={handleCountryChange}
        />
    );
};
