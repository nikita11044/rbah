import { IProfile } from 'entities/Profile';
import { ProfileValidationError } from '../../types/profileSchema';

export const validateProfile = (profile?: IProfile) => {
    if (!profile) {
        return [ProfileValidationError.INCORRECT_USER_DATA];
    }

    const {
        firstName, lastName, age, country,
    } = profile;

    const errors: Array<ProfileValidationError> = [];

    if (!firstName || !lastName) {
        errors.push(ProfileValidationError.INCORRECT_USER_DATA);
    }

    if (!age || !Number.isInteger(age)) {
        errors.push(ProfileValidationError.INCORRECT_AGE);
    }

    if (!country) {
        errors.push(ProfileValidationError.INCORRECT_COUNTRY);
    }

    return errors;
};
