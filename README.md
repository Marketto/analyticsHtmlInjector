# Analytics HTML Injector

[![NPM Version](http://img.shields.io/npm/v/analyticsHtmlInjector.svg?style=flat)](https://www.npmjs.org/package/analyticsHtmlInjector)
[![NPM Downloads](https://img.shields.io/npm/dm/analyticsHtmlInjector.svg?style=flat)](https://npmcharts.com/compare/analyticsHtmlInjector?minimal=true)

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

## Author

**Marco Ricupero** - [Github](https://github.com/Marketto) - [Blog](http://blog.marketto.it)


## License

This project is licensed under the MIT License - see the [License](/LICENSE) file for details