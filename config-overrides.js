const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: true,
  }),
//   fixBabelImports('import', {
//     libraryName: 'antd-mobile',
//     style: true,
//   }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars: {
        '@primary-color': '#0d63b3',
      },
    },
  }),
);