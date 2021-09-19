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
const CopyPlugin = require('copy-webpack-plugin');
const filename = (ext) => `[name].[contenthash].${ext}`;

const lintPlugin = (isDev) => isDev ? [] : [new ESLintPlugin({ extensions: ['js'] }),
  new StyleLintPlugin({ extensions: ['css', 'scss'] }),
  new PrettierPlugin(),];

const fs = require('fs')

function generateHtmlPlugins(templateDir) {
  const templateFiles = fs.readdirSync(path.resolve(__dirname, templateDir));
  return templateFiles.map(item => {
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    return new HtmlWebpackPlugin({
      filename: `${name}.html`,
      template: path.resolve(__dirname, `${templateDir}/${name}.${extension}`),
      inject: true,
      chunks: [`${name}`]
    })
  })
}
const htmlPlugins = generateHtmlPlugins('./src/page')

module.exports = ({ develop }) => ({
  mode: develop ? 'development' :  'production',
  devtool: develop ? 'inline-source-map' : false,
  context: path.resolve(__dirname, 'src'),
  entry: {
    index: './config/index.js',
    404 : './config/404.js',
    auth: './config/auth.js',
    profile: './config/profile.js',
    task: './config/task.js',
    users: './config/users.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `./js/${filename('js')}`,
    publicPath: '',
    assetModuleFilename: '[path][name][ext]',
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  module: {
    rules: [
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
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
    // new HtmlWebpackPlugin({
    //   appMountId: 'app',
    //   filename: 'index.html',
    //   template: path.resolve(__dirname, 'src/index.html'),
    //   minify: {
    //     collapseWhitespace: true,
    //   }
    // }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: `${filename('css')}`
    }),
    new CopyPlugin({
      patterns: [
        {from:'./assets', to : 'assets'}
      ],
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
    ...htmlPlugins
  ]
});
