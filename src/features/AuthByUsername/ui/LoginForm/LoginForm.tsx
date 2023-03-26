import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppBtn, AppInput, AppText } from 'shared/ui';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppTextTheme } from 'shared/ui/AppText/AppText';
import { DynamicDataLoader, ReducerList } from 'shared/lib/DinamicDataLoader/DynamicDataLoader';
import { getPassword } from '../../model/selectors/getPassword/getPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getIsLoginLoading } from '../../model/selectors/getIsLoginLoading/getIsLoginLoading';
import { getUsername } from '../../model/selectors/getUsername/getUsername';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import styles from './LoginForm.module.scss';

export interface ILoginFormProps {
    className?: string
}

const reducers: ReducerList = {
    login: loginReducer,
};

const LoginForm = ({ className }: ILoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const username = useSelector(getUsername);
    const password = useSelector(getPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getIsLoginLoading);

    const handleUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const handlePasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const handleLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <DynamicDataLoader reducers={reducers} removeOnUnmount>
            <div className={classNames(styles.LoginForm, {}, [className])}>
                <AppText title={t('Войти')} />
                {error && <AppText text={t('Неверный логин или пароль')} theme={AppTextTheme.ERROR} />}
                <AppInput
                    placeholder={t('Имя пользователя')}
                    value={username}
                    onChange={handleUsernameChange}
                />
                <AppInput
                    placeholder={t('Пароль')}
                    value={password}
                    onChange={handlePasswordChange}
                />
                <AppBtn
                    className={styles.loginBtn}
                    disabled={isLoading}
                    onClick={handleLoginClick}
                >
                    {t('Войти')}
                </AppBtn>
            </div>
        </DynamicDataLoader>
    );
};

export default LoginForm;
