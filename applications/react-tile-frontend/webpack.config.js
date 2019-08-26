const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, argv) => {
  const mode = argv.mode === 'development' ? 'development' : 'production';
  const isModeProduction = mode === 'production';
  const outputDir = path.resolve(__dirname, 'dist');

  return {
    mode,

    bail: isModeProduction,

    devtool: !isModeProduction ? 'cheap-module-source-map' : false,

    devServer: {
      contentBase: outputDir,
    },

    entry: './src/index.tsx',

    output: {
      filename: '[name].bundle.js',
      path: outputDir,
      futureEmitAssets: true,
    },

    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },

    optimization: {
      splitChunks: {
        chunks: 'all',
      },
      runtimeChunk: true,
    },

    performance: {
      hints: isModeProduction ? 'error' : false,
    },

    module: {
      strictExportPresence: true,
      rules: [
        {
          test: /\.(js|tsx?)$/,
          enforce: 'pre',
          use: 'eslint-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: 'src/index.ejs',
      }),
    ],
  };
};
