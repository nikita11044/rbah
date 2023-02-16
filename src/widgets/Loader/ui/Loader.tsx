import { classNames } from 'shared/lib/classNames/classNames';
import styles from './Loader.module.scss';
import { Spinner } from './Spinner';

interface ILoaderProps {
    className?: string
}

export const Loader = ({ className }: ILoaderProps) => (
    <div className={classNames(styles.Loader, {}, [className])}>
        <Spinner />
    </div>
);
