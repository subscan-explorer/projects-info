const path = require('path');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
    publicPath: '',
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    libraryTarget: 'umd', // 打包方式
    globalObject: 'this', // 全局对象
    library: 'parachainInfo', // 类库名称
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg)$/i,
        type: 'asset/inline'
      }
    ]
  },
};