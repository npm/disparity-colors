/* IMPORTANT
 * This snapshot file is auto-generated, but designed for humans.
 * It should be checked into source control and tracked carefully.
 * Re-generate by setting TAP_SNAPSHOT=1 and running tests.
 * Make sure to inspect the output below.  Do not ignore changes!
 */
'use strict'
exports[`test.js TAP iterate through multiple files > must match snapshot 1`] = `
[33mdiff --git a/yargs.js b/yargs.js[39m
[33mindex 15.3.0..15.3.1 100664[39m
[33m--- a/yargs.js	[39m
[33m+++ b/yargs.js	[39m
[35m@@ -259,6 +259,7 @@[39m
   function populateParserHintArray (type, keys, value) {
     keys = [].concat(keys)
     keys.forEach((key) => {
[32m+      key = sanitizeKey(key)[39m
       options[type].push(key)
     })
   }
[35m@@ -314,8 +315,8 @@[39m
 
   function populateParserHintObject (builder, isArray, type, key, value) {
     if (Array.isArray(key)) {
[32m+      const temp = Object.create(null)[39m
       // an array of keys with one value ['x', 'y', 'z'], function parse () {}
[31m-      const temp = {}[39m
       key.forEach((k) => {
         temp[k] = value
       })
[35m@@ -326,6 +327,7 @@[39m
         builder(k, key[k])
       })
     } else {
[32m+      key = sanitizeKey(key)[39m
       // a single key value pair 'x', parse() {}
       if (isArray) {
         options[type][key] = (options[type][key] || []).concat(value)
[35m@@ -335,6 +337,13 @@[39m
     }
   }
 
[32m+  // TODO(bcoe): in future major versions move more objects towards[39m
[32m+  // Object.create(null):[39m
[32m+  function sanitizeKey (key) {[39m
[32m+    if (key === '__proto__') return '___proto___'[39m
[32m+    return key[39m
[32m+  }[39m
[32m+[39m
   function deleteFromParserHintObject (optionKey) {
     // delete from all parsing hints:
     // boolean, array, key, alias, etc.
`

exports[`test.js TAP iterate through multiple files > must match snapshot 2`] = `
[33mdiff --git a/lib/fund.js b/lib/fund.js[39m
[33mold mode 100644[39m
[33mnew mode 100755[39m
`

exports[`test.js TAP iterate through multiple files > must match snapshot 3`] = `
[33mdiff --git a/package.json b/package.json[39m
[33mindex 15.3.0..15.3.1 100664[39m
[33m--- a/package.json	[39m
[33m+++ b/package.json	[39m
[35m@@ -1,6 +1,6 @@[39m
 {
   "name": "yargs",
[31m-  "version": "15.3.0",[39m
[32m+  "version": "15.3.1",[39m
   "description": "yargs the modern, pirate-themed, successor to optimist.",
   "main": "./index.js",
   "contributors": [
[35m@@ -29,12 +29,13 @@[39m
     "string-width": "^4.2.0",
     "which-module": "^2.0.0",
     "y18n": "^4.0.0",
[31m-    "yargs-parser": "^18.1.0"[39m
[32m+    "yargs-parser": "^18.1.1"[39m
   },
   "devDependencies": {
     "c8": "^7.0.0",
     "chai": "^4.2.0",
     "chalk": "^3.0.0",
[32m+    "coveralls": "^3.0.9",[39m
     "cpr": "^3.0.1",
     "cross-spawn": "^7.0.0",
     "es6-promise": "^4.2.5",
`

exports[`test.js TAP iterate through multiple files > must match snapshot 4`] = `
[33mdiff --git a/CHANGELOG.md b/CHANGELOG.md[39m
[33mindex 15.3.0..15.3.1 100664[39m
[33m--- a/CHANGELOG.md	[39m
[33m+++ b/CHANGELOG.md	[39m
[35m@@ -2,6 +2,14 @@[39m
 
 All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
 
[32m+### [15.3.1](https://www.github.com/yargs/yargs/compare/v15.3.0...v15.3.1) (2020-03-16)[39m
[32m+[39m
[32m+[39m
[32m+### Bug Fixes[39m
[32m+[39m
[32m+* __proto__ will now be replaced with ___proto___ in parse ([#258](https://www.github.com/yargs/yargs-parser/issues/258)), patching a potential [39m
[32m+prototype pollution vulnerability. This was reported by the Snyk Security Research Team. ([63810ca](https://www.github.com/yargs/yargs-parser/commit/63810ca1ae1a24b08293a4d971e70e058c7a41e2))[39m
[32m+[39m
 ## [15.3.0](https://www.github.com/yargs/yargs/compare/v15.2.0...v15.3.0) (2020-03-08)
`

exports[`test.js TAP iterate through multiple files > must match snapshot 5`] = `
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

exports[`test.js TAP single file > should add right colors to each section of diff 1`] = `
[33m--- a/src/index.js[39m
[33m+++ b/src/index.js[39m
[35m@@ -1,4 +1,5 @@[39m
 "use strict";
[32m+"use foo";[39m

 const os = require("os");
`

exports[`test.js TAP single file, custom header length > should add right colors to each section of diff 1`] = `
[33mdiff --git a/src/index.js b/src/index.js[39m
[33mindex a0a7b09..9f54025 100644[39m
[33m--- a/src/index.js[39m
[33m+++ b/src/index.js[39m
[35m@@ -1,4 +1,5 @@[39m
 "use strict";
[32m+"use foo";[39m

 const os = require("os");
`
