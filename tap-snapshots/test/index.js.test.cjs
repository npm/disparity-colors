/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test/index.js TAP custom header length > should colorize header lines 1`] = `
[33mdiff --git a/src/index.js b/src/index.js[39m
[33mindex a0a7b09..9f54025 100644[39m
[33m--- a/src/index.js[39m
[33m+++ b/src/index.js[39m
[35m@@ -1,4 +1,5 @@[39m
 "use strict";
[32m+"use foo";[39m

 const os = require("os");
`

exports[`test/index.js TAP header greater than amount of lines > should not fail and colorize lines properly 1`] = `
[33mdiff --git a/lib/fund.js b/lib/fund.js[39m
[33mold mode 100644[39m
[33mnew mode 100755[39m
`

exports[`test/index.js TAP invalid header options > should default to 2-lines header on headerLength: NaN 1`] = `
[33m--- a/src/index.js[39m
[33m+++ b/src/index.js[39m
[35m@@ -1,4 +1,5 @@[39m
 "use strict";
[32m+"use foo";[39m

 const os = require("os");
`

exports[`test/index.js TAP invalid header options > should default to 2-lines header on headerLength: empty string 1`] = `
[33m--- a/src/index.js[39m
[33m+++ b/src/index.js[39m
[35m@@ -1,4 +1,5 @@[39m
 "use strict";
[32m+"use foo";[39m

 const os = require("os");
`

exports[`test/index.js TAP invalid header options > should default to 2-lines header on headerLength: null 1`] = `
[33m--- a/src/index.js[39m
[33m+++ b/src/index.js[39m
[35m@@ -1,4 +1,5 @@[39m
 "use strict";
[32m+"use foo";[39m

 const os = require("os");
`

exports[`test/index.js TAP invalid header options > should default to 2-lines header on headerLength: regex 1`] = `
[33m--- a/src/index.js[39m
[33m+++ b/src/index.js[39m
[35m@@ -1,4 +1,5 @@[39m
 "use strict";
[32m+"use foo";[39m

 const os = require("os");
`

exports[`test/index.js TAP invalid header options > should default to 2-lines header on headerLength: undefined 1`] = `
[33m--- a/src/index.js[39m
[33m+++ b/src/index.js[39m
[35m@@ -1,4 +1,5 @@[39m
 "use strict";
[32m+"use foo";[39m

 const os = require("os");
`

exports[`test/index.js TAP invalid header options > should default to 2-lines header on headerLength: {} 1`] = `
[33m--- a/src/index.js[39m
[33m+++ b/src/index.js[39m
[35m@@ -1,4 +1,5 @@[39m
 "use strict";
[32m+"use foo";[39m

 const os = require("os");
`

exports[`test/index.js TAP long header example > should colorize long header 1`] = `
[33mdiff --git a/node_modules/string_decoder/node_modules/safe-buffer/README.md b/node_modules/string_decoder/node_modules/safe-buffer/README.md[39m
[33mdeleted file mode 100644[39m
[33mindex 356e35193..000000000[39m
[33m--- a/node_modules/string_decoder/node_modules/safe-buffer/README.md[39m
[33m+++ /dev/null[39m
[35m@@ -1,586 +0,0 @@[39m
[31m-# safe-buffer [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url][39m
[31m-[39m
[31m-[travis-image]: https://img.shields.io/travis/feross/safe-buffer/master.svg[39m
[31m-[travis-url]: https://travis-ci.org/feross/safe-buffer[39m
[31m-[npm-image]: https://img.shields.io/npm/v/safe-buffer.svg[39m
[31m-[npm-url]: https://npmjs.org/package/safe-buffer[39m
[31m-[downloads-image]: https://img.shields.io/npm/dm/safe-buffer.svg[39m
[31m-[downloads-url]: https://npmjs.org/package/safe-buffer[39m
[31m-[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg[39m
[31m-[standard-url]: https://standardjs.com[39m
[31m-[39m
[31m-#### Safer Node.js Buffer API[39m
[31m-[39m
[31m-**Use the new Node.js Buffer APIs (\`Buffer.from\`, \`Buffer.alloc\`,[39m
[31m-\`Buffer.allocUnsafe\`, \`Buffer.allocUnsafeSlow\`) in all versions of Node.js.**[39m
[31m-[39m
[31m-**Uses the built-in implementation when available.**[39m
[31m-[39m
`

exports[`test/index.js TAP no header > should colorize with no header 1`] = `
[35m@@ -1,4 +1,5 @@[39m
 "use strict";
[32m+"use foo";[39m

 const os = require("os");
`

exports[`test/index.js TAP only header > should colorize all output as header 1`] = `
[33mdiff --git a/lib/fund.js b/lib/fund.js[39m
[33mold mode 100644[39m
[33mnew mode 100755[39m
`

exports[`test/index.js TAP simple diff > should colorize simple diff 1`] = `
[33m--- a/src/index.js[39m
[33m+++ b/src/index.js[39m
[35m@@ -1,4 +1,5 @@[39m
 "use strict";
[32m+"use foo";[39m

 const os = require("os");
`
