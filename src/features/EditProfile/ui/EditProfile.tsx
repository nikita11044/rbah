import { useSelector } from 'react-redux';
import {
    getIsProfileLoading,
    getProfileError,
    getProfileFormData,
    getProfileReadOnly,
    getProfileValidationErrors,
    profileActions,
    ProfileCard,
} from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { AppText } from 'shared/ui';
import { AppTextTheme } from 'shared/ui/AppText/AppText';
import { useTranslation } from 'react-i18next';
import { ProfileValidationError } from 'entities/Profile/model/types/profileSchema';

export const EditProfile = () => {
    const { t } = useTranslation('profile');
    const isLoading = useSelector(getIsProfileLoading);
    const error = useSelector(getProfileError);
    const readOnly = useSelector(getProfileReadOnly);
    const formData = useSelector(getProfileFormData);
    const validationErrors = useSelector(getProfileValidationErrors);

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

    // TODO: add locales
    const validationErrorsTranslation = {
        [ProfileValidationError.SERVER_ERROR]: t('Ошибка сервера'),
        [ProfileValidationError.INCORRECT_COUNTRY]: t('Некорректный регион'),
        [ProfileValidationError.NO_DATA]: t('Данные не указаны'),
        [ProfileValidationError.INCORRECT_USER_DATA]: t('Имя и фамилия обязательны'),
        [ProfileValidationError.INCORRECT_AGE]: t('Некорректный возраст'),
    };

    return (
        <>
            {
                validationErrors?.length
                && validationErrors.map((err) => (
                    <AppText key={err} theme={AppTextTheme.ERROR} text={validationErrorsTranslation[err]} />
                ))
            }
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
        </>
    );
};
