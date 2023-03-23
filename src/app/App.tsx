import React, { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar/ui/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Loader } from 'widgets/Loader';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';

function App() {
    const { theme } = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback={<Loader />}>
                <Navbar />
                <div className="content">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;
