import {IBuildOptions} from "./types/config";
import webpack from "webpack";
import {getPlugins} from "./getPlugins";
import {getLoaders} from "./getLoaders";
import {getResolvers} from "./getResolvers";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: IBuildOptions): webpack.Configuration {
    const {paths, mode, isDev} = options;

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: getPlugins(options),
        module: {
            rules: getLoaders(options)
        },
        resolve: getResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}
