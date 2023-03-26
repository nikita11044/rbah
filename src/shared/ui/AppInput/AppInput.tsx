import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useState,
} from 'react';
import styles from './AppInput.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface IAppInputProps extends HTMLInputProps {
    className?: string
    value?: string
    onChange: (value: string) => void,
}

export const AppInput = memo(({
    className,
    value,
    onChange,
    type = 'text',
    placeholder,
}: IAppInputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(styles.inputWrap, {}, [className])}>
            {placeholder && <div>{`${placeholder}> `}</div>}
            <div>
                <input
                    className={styles.AppInput}
                    type={type}
                    value={value}
                    onChange={handleChange}
                />
            </div>
        </div>
    );
});
