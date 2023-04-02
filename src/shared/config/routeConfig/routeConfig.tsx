import { RouteProps } from 'react-router-dom';
import { Main } from 'pages/Main';
import { About } from 'pages/About';
import { NotFound } from 'pages/NotFound';
import { Profile } from 'pages/Profile';

type AppRoutesProps = RouteProps & {
    private?: boolean
}

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profileData',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Main />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <About />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <Profile />,
        private: true,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFound />,
    },
};
