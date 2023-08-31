import { classNames } from 'shared/lib/classNames/classNames';
import { AppSelect } from 'shared/ui/AppSelect/AppSelect';
import { Currency } from 'entities/Currency';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';

interface ISelectCurrencyProps {
    className?: string
    value?: Currency
    onChange?: (value: Currency) => void
    readonly?: boolean
}

const opts = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const SelectCurrency = memo(({
    className, value, onChange, readonly,
}: ISelectCurrencyProps) => {
    const { t } = useTranslation('profile');

    const handleChange = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <AppSelect
            readonly={readonly}
            className={classNames('', {}, [className])}
            label={t('Выберите валюту')}
            options={opts}
            value={value}
            onChange={handleChange}
        />
    );
});
