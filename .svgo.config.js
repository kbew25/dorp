module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          cleanupIDs: false,
          inlineStyles: false,
          removeViewBox: false
        },
      },
    },
    'prefixIds',
  ],
};
