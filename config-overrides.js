const { override, addLessLoader } = require("customize-cra");
module.exports = override(
  addLessLoader({
    strictMath: true,
    noIeCompat: true,
    cssLoaderOptions: {}, // .less file used css-loader option, not all CSS file.
    cssModules: {
      localIdentName: "[path][name]__[local]--[hash:base64:5]", // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    },
  })
);
