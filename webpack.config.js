import { resolve } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const mode = 'development';
export const entry = './src/index.js';
export const devtool = 'inline-source-map';
export const devServer = {
  static: './dist',
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];
export const output = {
  filename: 'main.js',
  path: resolve(__dirname, 'dist'),
  clean: true,
  publicPath: '/',
};
export const module = {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
    {
      test: /\.(woff|woff2|eot|ttf|otf)$/i,
      type: 'asset/resource',
    },
  ],
};