# Analytics HTML Injector

[![NPM Version](http://img.shields.io/npm/v/analytics-html-injector.svg?style=flat)](https://www.npmjs.org/package/analytics-html-injector)
[![NPM Downloads](https://img.shields.io/npm/dm/analytics-html-injector.svg?style=flat)](https://npmcharts.com/compare/analytics-html-injector?minimal=true)
[![Dependency status](https://david-dm.org/Marketto/analyticsHtmlInjector.svg)](https://david-dm.org/Marketto/analyticsHtmlInjector)
![Build Status](http://ci.marketto.it/buildStatus/icon?job=Analytics%20HTML%20Injector)
[![LICENSE](https://img.shields.io/badge/licese-MIT-gold.svg)](https://github.com/Marketto/analyticsHtmlInjector/blob/master/LICENSE)
[![Blog](https://img.shields.io/badge/blog-marketto-blue.svg)](http://blog.marketto.it)
[![Buy me a coffee](https://img.shields.io/badge/Ko--fi-donate-blueviolet)](https://ko-fi.com/marketto)

Command line tool to quick inject Analytic snippet after build and before upload in your CI

## Installation
```{r, engine='bash', global_install}
npm install analytics-html-injector -g
```

## Getting Started
### Base usage with Google Analytics
```{r, engine='bash', run}
analyticsHtmlInjector -G UA-12345-6
```

### Custom Input & Output
```{r, engine='bash', run}
analyticsHtmlInjector -G UA-12345-6 -i page.html -o injected.html
```


## LICENSE
[MIT License](LICENSE)

## AUTHOR
[Marco Ricupero](mailto:marco.ricupero@gmail.com)
