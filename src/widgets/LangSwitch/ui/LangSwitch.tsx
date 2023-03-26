import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';
import { AppBtn, AppBtnTheme } from 'shared/ui';

interface ILangSwitchProps {
    className?: string
}

export const LangSwitch = memo(({ className }: ILangSwitchProps) => {
    const { t, i18n } = useTranslation();

    const switchLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classNames('', {}, [className])}>
            <AppBtn theme={AppBtnTheme.CLEAR} onClick={switchLang}>{t('Язык')}</AppBtn>
        </div>
    );
});
