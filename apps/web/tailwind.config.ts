const baseConfig = require("@tracksubz/tailwind-config");
const path = require("path");

module.exports = {
  ...baseConfig,
  content: [
    ...baseConfig.content,
    `${path.join(require.resolve("@tracksubz/ui"), "..")}/**/*.{ts,tsx}`, // this means to include the @tracksubz/ui file in this package and use them in the build process
  ],
};
