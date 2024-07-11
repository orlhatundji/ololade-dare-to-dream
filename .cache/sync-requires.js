
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/simon/dev/react/ololade-dare-to-dream/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/simon/dev/react/ololade-dare-to-dream/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/simon/dev/react/ololade-dare-to-dream/src/pages/index.js"))
}

