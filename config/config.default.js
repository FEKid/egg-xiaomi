'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543801206350_4176';

  // add your config here
  config.middleware = [];
    //多模板引擎配置
    config.view = {
      mapping: {
        '.html': 'ejs',
  
        '.nj': 'nunjucks'
      },
    };
  return config;
};
