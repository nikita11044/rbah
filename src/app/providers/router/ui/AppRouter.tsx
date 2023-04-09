import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { Loader } from 'widgets/Loader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';

function AppRouter() {
    const renderWithWrap = useCallback((route) => {
        const element = (
            <Suspense fallback={<Loader />}>
                <div className="page-wrap">
                    {route.element}
                </div>
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.auth ? <RequireAuth>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <Routes>
                {Object.values(routeConfig).map(renderWithWrap)}
            </Routes>
        </Suspense>
    );
}

export default memo(AppRouter);
