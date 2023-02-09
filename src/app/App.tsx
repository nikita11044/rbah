import React from 'react';
import {Link} from 'react-router-dom';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";


const App = () => {
   const { theme, changeTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={changeTheme}>change theme</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    );
};

export default App;
