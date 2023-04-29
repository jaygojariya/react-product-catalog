const fs = require('fs');
// const chalk = require('chalk');

module.exports = {
  input: [
    'src/*.{js,jsx}',
  ],
  output: './',
  options: {
    debug: false,
    func: {
      list: ['t'],
      extensions: ['.js', '.jsx'],
    },
    trans: {
      component: 'Trans',
      i18nKey: 'i18nKey',
      defaultsKey: 'defaults',
      extensions: ['.js', '.jsx'],
      fallbackKey(ns, value) {
        return value;
      },
      acorn: {
        ecmaVersion: 2020, // defaults to 10
        sourceType: 'module', // defaults to 'module'
        // Check out https://github.com/acornjs/acorn/tree/master/acorn#interface for additional options
      },
    },
    lngs: ['en', 'fr'],
    ns: [
      'common',
    ],
    defaultLng: 'en',
    defaultNs: 'common',
    resource: {
      loadPath: 'public/locales/{{lng}}/{{lng}}.json',
      savePath: 'public/locales/{{lng}}/{{lng}}.json',
      jsonIndent: 2,
      lineEnding: '\n',
    },
    keySeparator: '>>',
    nsSeparator: '||',
    interpolation: {
      prefix: '{{',
      suffix: '}}',
    },
  },
  transform: function customTransform(file, enc, done) {
    const { parser } = this;
    const content = fs.readFileSync(file.path, enc);
    let count = 0;

    parser.parseFuncFromString(content, { list: ['t'] }, (key, options) => {
      options.defaultValue = key; // use key as the value
      parser.set(key, {
        ...options,
        keySeparator: '>',
        nsSeparator: '|',
      });
      ++count;
    });

    if (count > 0) {
      // console.log(`i18next-scanner: count=${chalk.cyan(count)}, file=${chalk.yellow(JSON.stringify(file.relative))}`);
    }

    done();
  },
};
