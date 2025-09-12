import HtmlBundlerPlugin from 'html-bundler-webpack-plugin';
import path from 'node:path';

const { dirname } = import.meta;

export default {
    mode: 'development',
    entry: {
        index: path.join(dirname, 'src/index.js'),
    },
    output: {
        path: path.join(dirname, 'public'),
    },
    resolve: {
        extensions: ['.js'],
        alias: {
            'some-lib': path.resolve(dirname, 'lib/index.js'),
        },
    },
    devServer: {
        open: true,
        static: {
            directory: path.join(dirname, 'public'),
        },
        watchFiles: ['src/**/*'],
    },
    plugins: [
        new HtmlBundlerPlugin({
            entry: {
                index: 'src/index.html',
            },
            js: {
                filename: '[name].[contenthash:8].js',
            },
        }),
    ],
};
