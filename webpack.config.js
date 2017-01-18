module.exports = {
  watch: true,
  entry: "./app.js",
  output: {
    filename: "bundle.js"
  },
  module: {
   preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'jshint-loader'

      }
   ],
   loaders: [
     {
       test: [/\.js$/, /\.es6$/],
       exclude: /node_modules/,
       loader: 'babel-loader',
       query: {
         presets:[ 'es2015', 'react', 'stage-2' ]
       }
     },
     { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
   ]
 },
 resolve: {
   extensions: ['', '.js', '.es6']
 },
}
