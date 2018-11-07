process.env.NODE_ENV = 'production';
require('ignore-styles');

  require('@babel/register')({
    ignore: [ /(node_modules)/ ],
    presets: ["@babel/preset-env", '@babel/react']
  });
require('./index');