import {IBuildOptions} from "./types/config";
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer({ port }: IBuildOptions): DevServerConfiguration {
    return {
        port: port,
        open: true,
        historyApiFallback: true,
    }
}
