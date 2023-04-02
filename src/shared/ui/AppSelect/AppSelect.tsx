import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import styles from './AppSelect.module.scss';

export type Options = {
    value: string
    content: string
}

interface IAppSelectProps {
    className?: string
    label?: string
    options?: Array<Options>
    value?: string
    onChange?: (value: string) => void
    readonly?: boolean
}

export const AppSelect = memo(({
    className,
    label,
    options,
    value,
    onChange,
    readonly,
}: IAppSelectProps) => {
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(e.target.value);
        }
    };

    const opts = useMemo(() => options?.map(({ value, content }) => (
        <option
            className={styles.option}
            value={value}
        >
            {content}
        </option>
    )), [options]);

    return (
        <div className={classNames(styles.AppSelectWrapper, {}, [className])}>
            {
                label && <span className={styles.label}>{`${label}>`}</span>
            }
            <select
                disabled={readonly}
                className={styles.select}
                value={value}
                onChange={handleChange}
            >
                {opts}
            </select>
        </div>
    );
});
