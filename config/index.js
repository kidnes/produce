/**
 * @file 基本配置
 *
 * @author liubin29
 * 2017年8月31日
 */

'use strict';
const path = require('path');
const mockMiddleware = require('../build/mock-middleware');

module.exports = {
    dev: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            // '/': {
            //     // target: 'http://10.95.105.190:8399',
            //     target: 'http://172.24.196.36:8399',
            //     changeOrigin: true
            // }
        },
        host: '0.0.0.0',
        port: 8880,
        // autoOpenBrowser: true,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        cacheBusting: true,
        cssSourceMap: true,
        after(app) {
            app.use(mockMiddleware);
        }
    },

    build: {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        devtool: '#source-map',
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        bundleAnalyzerReport: process.env.npm_config_report
    }
};
