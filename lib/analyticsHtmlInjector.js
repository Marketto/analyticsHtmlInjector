'use strict';
require('colors');
const fs = require('fs');
const path = require('path');

function injectSnippet({input, output}, analyticType, replacements){
    console.log('Checking params and files availability'.blue);

    let analyticSnippet = path.join(__dirname, analyticType||'_', 'script.js');
    //Checking params
    if (!input){
        throw new Error("Missing input file path".red);
    } else if (!fs.existsSync(path.join(input))) {
        throw new Error(`Input file [${input}] not found`.red);
    }
    if (!output) {
        throw new Error("Missing output file path".red);
    }
    if (!analyticType) {
        throw new Error("Missing analytic snippet file path".red);
    } else if (!fs.existsSync(analyticSnippet)) {
        throw new Error(`Missing Analytic Snippet for [${analyticType}] @ '${analyticSnippet}'`.red);
    }
    if (!replacements) {
        throw new Error("Missing replacement config for analytic snippet injection".red);
    }

    //Reading files
    const DEFAULT_FS_CFG = {
        encoding : 'utf8'
    };
    try {
        console.log(`Reading ${analyticType} Analytic Configuration`.blue);
        let analyticSnippetSource = fs.readFileSync(analyticSnippet, DEFAULT_FS_CFG);

        console.log(`Reading HTML [${input}] file to inject`.blue);
        let htmlSource = fs.readFileSync(input, DEFAULT_FS_CFG);

        console.log(`Writing parameters into ${analyticType} Analytic Snippet`.blue);
        Object.keys(replacements).forEach(key=>{
            analyticSnippetSource = analyticSnippetSource.replace(key, JSON.stringify(replacements[key]));
        });

        console.log(`Injecting ${analyticType} Analytic Snippet into ${input} HTML`.blue);
        let htmlDest = htmlSource.replace(/\<\/head\>/i, `<script>'use strict';${analyticSnippetSource}</script></head>`);

        console.log(`Writing Injected HTML to ${output}`.blue);
        fs.writeFileSync(output, htmlDest, DEFAULT_FS_CFG);

        console.log(`Injection completed`.green);
    }catch (e){
        throw e;
    }
}

function injectGoogleAnalytics(cfg = {}){
    return injectSnippet(cfg, 'google', {
        '$TRACKING_ID': cfg.google
    });
}

function toAbsolutePath(genericPath) {
    const ABSOLUTE_PATH_REGEXP = /^(?:[a-z]\:\\|\/)/i;

    if (genericPath && !ABSOLUTE_PATH_REGEXP.test(genericPath)) {
        return path.join(process.cwd(), genericPath);
    }
    return genericPath;
}

exports.injectGoogleAnalytics = injectGoogleAnalytics;

exports.toAbsolutePath = toAbsolutePath;