import { AppBtn, AppBtnTheme, AppText } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfile } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import styles from './ProfileHeader.module.scss';

export const ProfileHeader = () => {
    const { t } = useTranslation('profile');

    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const handleEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const handleEditCancel = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const handleSave = useCallback(() => {
        dispatch(updateProfile());
    }, [dispatch]);

    return (
        <div className={styles.ProfileHeader}>
            <AppText title={t('Профиль')} />
            {
                readOnly
                    ? (
                        <AppBtn
                            className={styles.editBtn}
                            theme={AppBtnTheme.OUTLINE}
                            onClick={handleEdit}
                        >
                            {t('Редактировать')}
                        </AppBtn>
                    )
                    : (
                        <>
                            <AppBtn
                                className={styles.editBtn}
                                theme={AppBtnTheme.OUTLINE_RED}
                                onClick={handleEditCancel}
                            >
                                {t('Отменить')}
                            </AppBtn>
                            <AppBtn
                                className={styles.saveBtn}
                                theme={AppBtnTheme.OUTLINE}
                                onClick={handleSave}
                            >
                                {t('Сохранить')}
                            </AppBtn>
                        </>
                    )
            }
        </div>
    );
};
