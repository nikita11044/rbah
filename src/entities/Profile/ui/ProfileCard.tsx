import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    AppBtn, AppBtnTheme, AppInput, AppText,
} from 'shared/ui';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { getIsProfileLoading } from '../model/selectors/getIsProfileLoading/getIsProfileLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import styles from './ProfileCard.module.scss';

interface IProfileCardProps {
    className?: string
}

export const ProfileCard = ({ className }: IProfileCardProps) => {
    const { t } = useTranslation('profile');

    const data = useSelector(getProfileData);
    const isLoading = useSelector(getIsProfileLoading);
    const error = useSelector(getProfileError);

    return (
        <div className={classNames(styles.ProfileCard, {}, [className])}>
            <div className={styles.header}>
                <AppText title={t('Профиль')} />
                <AppBtn
                    className={styles.editBtn}
                    theme={AppBtnTheme.OUTLINE}
                >
                    {t('Редактировать')}
                </AppBtn>
            </div>
            <div className={styles.data}>
                <AppInput
                    className={styles.input}
                    value={data?.firstName}
                    placeholder={t('Имя')}
                />
                <AppInput
                    className={styles.input}
                    value={data?.lastName}
                    placeholder={t('Фамилия')}
                />
            </div>
        </div>
    );
};
