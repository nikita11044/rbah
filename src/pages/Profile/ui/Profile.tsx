import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo, useEffect } from 'react';
import { DynamicDataLoader, ReducerList } from 'shared/lib/DinamicDataLoader/DynamicDataLoader';
import { fetchProfile, ProfileCard, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import styles from './Profile.module.scss';

const defaultReducers: ReducerList = {
    profile: profileReducer,
};

interface IProfileProps {
    className?: string
}

const Profile = memo(({ className }: IProfileProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    return (
        <DynamicDataLoader reducers={defaultReducers} removeOnUnmount>
            <div className={classNames(styles.Profile, {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicDataLoader>
    );
});

export default Profile;
