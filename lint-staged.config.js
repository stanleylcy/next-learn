const path = require("path")

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`

module.exports = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "*.{ts,tsx}": ["tsc --noEmit"],
  "*.{js,jsx,md,html,css,json}": ["prettier --write"],
  "*.{ts,tsx}": ["prettier --parser=typescript --write"],
}
