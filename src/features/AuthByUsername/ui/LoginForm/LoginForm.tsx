import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppBtn, AppInput } from 'shared/ui';
import { useState } from 'react';
import styles from './LoginForm.module.scss';

interface ILoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: ILoginFormProps) => {
    const { t } = useTranslation();

    const [username, setUsername] = useState('');

    return (
        <div className={classNames(styles.LoginForm, {}, [className])}>
            <AppInput placeholder="Имя пользователя" value={username} onChange={setUsername} />
            <AppBtn className={styles.loginBtn}>
                {t('Войти')}
            </AppBtn>
        </div>
    );
};
