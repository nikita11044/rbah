import webpack from 'webpack';
import { IBuildOptions } from './types/config';
import { configureCssLoader } from './loaders/configureCssLoader';
import { buildBabelLoader } from './loaders/configureBabelLoader';

export function getLoaders({ isDev }: IBuildOptions): webpack.RuleSetRule[] {
    const babelLoader = buildBabelLoader(isDev);

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const cssLoader = configureCssLoader(isDev);

    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoader,
    ];
}
