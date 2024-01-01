const baseConfig = require("@zingcrafter/tailwind-config");
const path = require("path");

module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    `${path.join(require.resolve("@zingcrafter/ui"), "..")}/**/*.{ts,tsx}`, // this means to include the @zingcrafter/ui file in this package and use them in the build process
  ],
};
