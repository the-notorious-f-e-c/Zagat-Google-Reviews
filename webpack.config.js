module.exports = {
  entry :`${__dirname}/client/src/index.jsx`,
  output : {
    filename : 'bundle.js',
    path : `${__dirname}/client/dist`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader : "babel-loader",
          query : {
            presets : ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      }
    ]
  },
  resolve : {
    extensions: ['.js', '.jsx'],
  },
};