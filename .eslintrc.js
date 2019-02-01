const fs = require("fs")
const path = require("path")

const prettierOptions = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, ".prettierrc"), "utf8")
)

module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "plugin:prettier/recommended"],
  rules: {
    "prettier/prettier": ["error", prettierOptions],
  },
}
