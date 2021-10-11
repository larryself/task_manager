const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const filename = (ext) => `[name].[contenthash].${ext}`;

const lintPlugin = (isDev) => isDev ? [] : [new ESLintPlugin({ extensions: ['js'] }),
  new StyleLintPlugin({ extensions: ['css', 'scss'] }),
  new PrettierPlugin(),];

const fs = require('fs')

function generateEntryPoints(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  const result = {};
  for (const key of templateFiles) {
    result[key] = path.resolve(__dirname, `${templateDir}/${key}/${key}.js`);
  }
  console.log(result)
  return result;
}
function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    return new HtmlWebpackPlugin({
      filename: `${item}.html`,
      template: path.resolve(__dirname, `${templateDir}/${item}/${item}.pug`),
      inject: true,
      chunks: [`${item}`]
    })
  })
}
const entryPoints = generateEntryPoints('./client/pages');
const htmlPlugins = generateHtmlPlugins('./client/pages');

module.exports = ({ develop }) => ({

  mode: develop ? 'development' :  'production',
  devtool: develop ? 'inline-source-map' : false,
  context: path.resolve(__dirname, 'client'),
  entry: entryPoints,

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `./js/${filename('js')}`,
    publicPath: '',
    assetModuleFilename: '[path][name][ext]',
  },
  devServer: {
    static: {
      publicPath: '/public',
      directory: path.join(__dirname, 'public'),
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.pug/i,
        loader: 'pug-loader',
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.(?:gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(|woff|eot|ttf)$/,
        type: 'asset/resource',
      },
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${filename('css')}`
    }),
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 90,
          progressive: true
        })
      ]
    }),
    ...lintPlugin(develop),
    ...htmlPlugins,
  ]
});
