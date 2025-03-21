const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = function override(config, env) {
  config.plugins.unshift(
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.resolve(__dirname, "node_modules") + "/jassub/dist",
          from: "*",
          to: "jassub",
          globOptions: {
            ignore: "*.asm.js"
          }
        },
        {
          context: path.resolve(__dirname, "node_modules") + "/jassub/src",
          from: "*",
          to: "jassub"
        }
      ]
    })
  );
  return config;
};
