import { classNames } from 'shared/lib/classNames/classNames';
import { AppSelect } from 'shared/ui/AppSelect/AppSelect';
import { useTranslation } from 'react-i18next';
import { memo, useCallback } from 'react';
import { Country } from 'entities/Country/model/types/country';

interface ISelectCurrencyProps {
    className?: string
    value?: Country
    onChange?: (value: Country) => void
    readonly?: boolean
}

const opts = [
    { value: Country.RUS, content: Country.RUS },
    { value: Country.USA, content: Country.USA },
    { value: Country.DE, content: Country.DE },
];

export const SelectCountry = memo(({
    className, value, onChange, readonly,
}: ISelectCurrencyProps) => {
    const { t } = useTranslation('profile');

    const handleChange = useCallback((value: string) => {
        onChange?.(value as Country);
    }, [onChange]);

    return (
        <AppSelect
            readonly={readonly}
            className={classNames('', {}, [className])}
            label={t('Выберите страну')}
            options={opts}
            value={value}
            onChange={handleChange}
        />
    );
});
