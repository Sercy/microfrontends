const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require('../package.json');

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        todoapp: 'todoapp@http://localhost:8081/remoteEntry.js',
      },
      shared: {
        ...packageJson.dependencies,

        // 'my-react': {
        //   // can be referenced by import "my-vue"
        //   import: 'react', // the "react" package will be used as a provided and fallback module
        //   shareKey: 'shared-react', // under this name the shared module will be placed in the share scope
        //   shareScope: 'default', // share scope with this name will be used
        //   singleton: true, // only a single version of the shared module is allowed
        //   strictVersion: true, // don't use shared version when version isn't valid. Singleton or modules without fallback will throw, otherwise fallback is used
        //   version: '1.2.3', // the version of the shared module
        //   requiredVersion: '^1.0.0', // the required version of the shared module
        // },
      },
    })
  ],
};

module.exports = merge(commonConfig, devConfig);
