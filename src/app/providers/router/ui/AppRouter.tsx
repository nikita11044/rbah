import React, { memo, Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'widgets/Loader';
import { useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';

function AppRouter() {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => Object.values(routeConfig).filter((r) => !(r.private && !isAuth)), [isAuth]);

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {routes.map(({ element, path }) => (
                    <Route
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<Loader />}>
                                <div className="page-wrap">
                                    {element}
                                </div>
                            </Suspense>
                        )}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}

export default memo(AppRouter);
