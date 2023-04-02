import { classNames, Mods } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useState,
} from 'react';
import styles from './AppInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface IAppInputProps extends HTMLInputProps {
    className?: string
    value?: string | number
    onChange?: (value: string) => void
    readonly?: boolean
}

export const AppInput = memo(({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
    readonly,
}: IAppInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {
        [styles.readOnly]: readonly,
    };

    return (
        <div className={classNames(styles.inputWrap, mods, [className])}>
            {placeholder && <div>{`${placeholder}> `}</div>}
            <div>
                <input
                    className={styles.AppInput}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    readOnly={readonly}
                />
            </div>
        </div>
    );
});
