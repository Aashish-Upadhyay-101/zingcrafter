const baseConfig = require("@zingcrafter/tailwind-config");

module.exports = {
  ...baseConfig,
  content: [...baseConfig.content, "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
};
