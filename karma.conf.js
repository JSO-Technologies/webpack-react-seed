module.exports = function (config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        autoWatch: true,
        frameworks: ['mocha', 'sinon-chai'],
        files: [
            './node_modules/phantomjs-polyfill/bind-polyfill.js',
            'tests.webpack.js'
        ],

        preprocessors: {
            'tests.webpack.js': ['webpack', 'sourcemap']
        },

        reporters: ['progress'],

        webpack: {
            devtool: 'inline-source-map',
            module: {
                loaders: [
                    {test: /\.js?$/, exclude: /node_modules/, loader: 'babel'},
                    {test: /\.scss/, exclude: /node_modules/, loader: 'style!css!sass?outputStyle=expanded'}
                ]
            }
        },

        webpackServer: {
            noInfo: true //please don't spam the console when running in karma!
        }
    });
};