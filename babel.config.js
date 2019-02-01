console.log("Loading Root Babel Config...")

module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
  ],
}
