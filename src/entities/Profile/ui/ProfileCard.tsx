import { classNames, Mods } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import {
    AppAvatar,
    AppInput, AppText,
} from 'shared/ui';
import { IProfile } from 'entities/Profile';
import { Loader } from 'widgets/Loader';
import { AppTextTheme, TextAlign } from 'shared/ui/AppText/AppText';
import { Currency } from 'entities/Currency/model/types/currency';
import { SelectCurrency } from 'entities/Currency';
import { Country } from 'entities/Country/model/types/country';
import { SelectCountry } from 'entities/Country';
import styles from './ProfileCard.module.scss';

interface IProfileCardProps {
    className?: string
    data?: IProfile
    error?: string
    isLoading?: boolean
    readOnly?: boolean
    handleFirstNameChange?: (value?: string) => void
    handleLastNameChange?: (value?: string) => void
    handleAgeChange?: (value?: string) => void
    handleCityChange?: (value?: string) => void
    handleUsernameChange?: (value?: string) => void
    handleAvatarChange?: (value?: string) => void
    handleCurrencyChange?: (value: Currency) => void
    handleCountryChange?: (value: Country) => void
}

export const ProfileCard = ({
    className,
    data,
    error,
    isLoading,
    readOnly,
    handleFirstNameChange,
    handleLastNameChange,
    handleAgeChange,
    handleCityChange,
    handleUsernameChange,
    handleAvatarChange,
    handleCurrencyChange,
    handleCountryChange,
}: IProfileCardProps) => {
    const { t } = useTranslation('profile');

    if (isLoading) {
        return (
            <div className={classNames(styles.ProfileCard, { [styles.loading]: true }, [className])}>
                <Loader />
            </div>
        );
    }

    const mods: Mods = {
        [styles.edit]: !readOnly,
    };

    if (error) {
        return (
            <div className={classNames(styles.ProfileCard, {}, [className, styles.error])}>
                <AppText
                    theme={AppTextTheme.ERROR}
                    title={t('При загрузке профиля произошла ошибка')}
                    text={t('Попробуйте обновить страницу')}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={classNames(styles.ProfileCard, mods, [className])}>
            <div>
                { data?.avatar
                    && (
                        <div className={styles.avatarWrapper}>
                            <AppAvatar src={data?.avatar} />
                        </div>
                    )}
                <AppInput
                    className={styles.input}
                    readonly={readOnly}
                    value={data?.firstName}
                    placeholder={t('Имя')}
                    onChange={handleFirstNameChange}
                />
                <AppInput
                    className={styles.input}
                    readonly={readOnly}
                    value={data?.lastName}
                    placeholder={t('Фамилия')}
                    onChange={handleLastNameChange}
                />
                <AppInput
                    className={styles.input}
                    readonly={readOnly}
                    value={data?.age}
                    placeholder={t('Возраст')}
                    onChange={handleAgeChange}
                />
                <AppInput
                    className={styles.input}
                    readonly={readOnly}
                    value={data?.city}
                    placeholder={t('Город')}
                    onChange={handleCityChange}
                />
                <AppInput
                    className={styles.input}
                    readonly={readOnly}
                    value={data?.username}
                    placeholder={t('Имя пользователя')}
                    onChange={handleUsernameChange}
                />
                <AppInput
                    className={styles.input}
                    readonly={readOnly}
                    value={data?.avatar}
                    placeholder={t('Ссылка на аватар')}
                    onChange={handleAvatarChange}
                />
                <SelectCurrency
                    className={styles.input}
                    value={data?.currency}
                    onChange={handleCurrencyChange}
                    readonly={readOnly}
                />
                <SelectCountry
                    className={styles.input}
                    value={data?.country}
                    onChange={handleCountryChange}
                    readonly={readOnly}
                />
            </div>
        </div>
    );
};
