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

const lintPlugin = (isDev) =>
  isDev
    ? []
    : [
        new ESLintPlugin({ extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'] }),
        new StyleLintPlugin({ extensions: ['css', 'scss'] }),
        new PrettierPlugin(),
      ];

const fs = require('fs');

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : false,
  context: path.resolve(__dirname, 'client'),
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `./js/${filename('js')}`,
    publicPath: '/',
    assetModuleFilename: 'public/[path][name][ext]',
  },
  resolve: {
    alias: { public: path.resolve(__dirname, 'public/') },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },

  devServer: {
    static: {
      publicPath: '/public',
      directory: path.resolve(__dirname, 'public'),
    },
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,

    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(?:gif|png|jpg|jpeg|svg)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(|woff|eot|ttf)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'index.html'),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${filename('css')}`,
    }),
    new ImageminPlugin({
      plugins: [
        imageminMozjpeg({
          quality: 90,
          progressive: true,
        }),
      ],
    }),
    ...lintPlugin(develop),
  ],
});
