// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  "plugins": {
    "cssnano": {},
    "postcss-import": {},
    "postcss-url": {},
    "autoprefixer": {
      "browsers": [
        "Android >= 4.1",
        "iOS >= 7"
      ]
    }
  }
}
