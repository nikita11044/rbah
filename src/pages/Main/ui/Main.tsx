import React from 'react';
import { useTranslation } from 'react-i18next';

function Main() {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная')}
        </div>
    );
}

export default Main;
