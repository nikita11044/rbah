import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { DynamicDataLoader, ReducerList } from 'shared/lib/DinamicDataLoader/DynamicDataLoader';
import { profileReducer } from 'entities/Profile';
import styles from './Profile.module.scss';

const defaultReducers: ReducerList = {
    profile: profileReducer,
};

interface IProfileProps {
    className?: string
}

const Profile = memo(({ className }: IProfileProps) => {
    const { t } = useTranslation();

    return (
        <DynamicDataLoader reducers={defaultReducers} removeOnUnmount>
            <div className={classNames(styles.Profile, {}, [className])}>
                {t('Профиль')}
            </div>
        </DynamicDataLoader>
    );
});

export default Profile;
