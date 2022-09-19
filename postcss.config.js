module.exports = {
  plugins: [
    require('postcss-inline-svg')({
      paths: ['./dist']
    }),
    require('postcss-svgo')({
      encode: 1
    }),
    require('autoprefixer')
  ],
};
