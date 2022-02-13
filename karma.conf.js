// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage'),
            require('karma-junit-reporter'),
            require('karma-sonarqube-unit-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
        ],
        client: {
            jasmine: {
                // you can add configuration options for Jasmine here
                // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
                // for example, you can disable the random execution with `random: false`
                // or set a specific seed with `seed: 4321`
            },
            clearContext: false, // leave Jasmine Spec Runner output visible in browser
        },
        jasmineHtmlReporter: {
            suppressAll: true, // removes the duplicated traces
        },
        coverageReporter: {
            dir: require('path').join(__dirname, './coverage'),
            subdir: '.',
            reporters: [
                { type: 'text-summary' },
                { type: 'cobertura' },
                { type: 'lcov' },
            ],
        },
        sonarQubeUnitReporter: {
            outputDir: 'coverage',
            sonarQubeVersion: 'LATEST',
            outputFile: 'sonarqube-test-results.xml',
            useBrowserName: false
        },
        junitReporter: {
            outputDir: 'coverage',
            outputFile: 'junit-test-results.xml',
            useBrowserName: false,
        },
        reporters: ['progress', 'kjhtml', 'sonarqubeUnit', 'junit'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['ChromeNoSandbox'],
        singleRun: false,
        restartOnFileChange: true,
        customLaunchers: {
            ChromeNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox', '--headless'],
            },
        },
    });
};
