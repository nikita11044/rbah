import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useEffect } from 'react';
import { DynamicDataLoader, ReducerList } from 'shared/lib/DinamicDataLoader/DynamicDataLoader';
import { fetchProfile, profileReducer } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { EditProfile } from 'features/EditProfile';
import { ProfileHeader } from '../ui/ProfileHeader/ProfileHeader';

const defaultReducers: ReducerList = {
    profile: profileReducer,
};

interface IProfileProps {
    className?: string
}

const Profile = memo(({ className }: IProfileProps) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfile());
    }, [dispatch]);

    return (
        <DynamicDataLoader reducers={defaultReducers} removeOnUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfileHeader />
                <EditProfile />
            </div>
        </DynamicDataLoader>
    );
});

export default Profile;
