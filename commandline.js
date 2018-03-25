#!/usr/bin/env node

const program = require('commander');
const path = require('path');
const package = require('./package.json');
const analyticsHtmlInjector = require('./lib/analyticsHtmlInjector');
require('colors');

program
    .version(package.version, '-v, --version')
    .description(package.description)
    .option('-i, --input [inputFile]', 'HTML file to read for injection', "./index.html")
    .option('-o, --output [outputFile]', 'Injected output file name', "./index.html")
    .option('-G, --google <googleTrackingId>', 'Inject google analytics with provided tracking id (UA-XXXXX-Y)', /^UA\-\d{5,}\-\d$/)
    .parse(process.argv);

program.inputFile = analyticsHtmlInjector.toAbsolutePath(program.inputFile);
program.outputFile = analyticsHtmlInjector.toAbsolutePath(program.outputFile);

analyticsHtmlInjector.injectGoogleAnalytics(program);