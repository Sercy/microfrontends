const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js', //* caching strategy
    publicPath: `/host/latest/`, //* this is the path that will be used by the browser to fetch the files
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',

      //* Runtime integration based on domain variable
      remotes: {
        todoapp: `todoapp@${domain}/todoapp/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies
    }),
  ],
}

module.exports = merge(commonConfig, prodConfig);