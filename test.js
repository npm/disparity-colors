const tap = require('tap')
const { test } = tap

const colorize = require('./index.js')

test('no str', t => {
  t.equal(colorize(), '', 'undefined')
  t.equal(colorize(NaN), '', 'NaN')
  t.equal(colorize({}), '', 'empty object')
  t.equal(colorize(null), '', 'null')
  t.equal(colorize(0), '', '0')
  t.equal(colorize(''), '', 'empty string')
  t.equal(colorize(/foo/g), '', 'regex')
  t.end()
})

test('single file', t => {
  t.matchSnapshot(
    colorize(`--- a/src/index.js
+++ b/src/index.js
@@ -1,4 +1,5 @@
 "use strict";
+"use foo";

 const os = require("os");`),
    'should add right colors to each section of diff'
  )
  t.end()
})

test('single file, custom header length', t => {
  t.matchSnapshot(
    colorize(`diff --git a/src/index.js b/src/index.js
index a0a7b09..9f54025 100644
--- a/src/index.js
+++ b/src/index.js
@@ -1,4 +1,5 @@
 "use strict";
+"use foo";

 const os = require("os");`, { headerLength: 4 }),
    'should add right colors to each section of diff'
  )
  t.end()
})

test('iterate through multiple files', t => {
  const files = [
    {
      content: `diff --git a/yargs.js b/yargs.js
index 15.3.0..15.3.1 100664
--- a/yargs.js	
+++ b/yargs.js	
@@ -259,6 +259,7 @@
   function populateParserHintArray (type, keys, value) {
     keys = [].concat(keys)
     keys.forEach((key) => {
+      key = sanitizeKey(key)
       options[type].push(key)
     })
   }
@@ -314,8 +315,8 @@
 
   function populateParserHintObject (builder, isArray, type, key, value) {
     if (Array.isArray(key)) {
+      const temp = Object.create(null)
       // an array of keys with one value ['x', 'y', 'z'], function parse () {}
-      const temp = {}
       key.forEach((k) => {
         temp[k] = value
       })
@@ -326,6 +327,7 @@
         builder(k, key[k])
       })
     } else {
+      key = sanitizeKey(key)
       // a single key value pair 'x', parse() {}
       if (isArray) {
         options[type][key] = (options[type][key] || []).concat(value)
@@ -335,6 +337,13 @@
     }
   }
 
+  // TODO(bcoe): in future major versions move more objects towards
+  // Object.create(null):
+  function sanitizeKey (key) {
+    if (key === '__proto__') return '___proto___'
+    return key
+  }
+
   function deleteFromParserHintObject (optionKey) {
     // delete from all parsing hints:
     // boolean, array, key, alias, etc.`,
      length: 4
    },
    {
      content: `diff --git a/lib/fund.js b/lib/fund.js
old mode 100644
new mode 100755`,
      length: 3
    },
    {
      content: `diff --git a/package.json b/package.json
index 15.3.0..15.3.1 100664
--- a/package.json	
+++ b/package.json	
@@ -1,6 +1,6 @@
 {
   "name": "yargs",
-  "version": "15.3.0",
+  "version": "15.3.1",
   "description": "yargs the modern, pirate-themed, successor to optimist.",
   "main": "./index.js",
   "contributors": [
@@ -29,12 +29,13 @@
     "string-width": "^4.2.0",
     "which-module": "^2.0.0",
     "y18n": "^4.0.0",
-    "yargs-parser": "^18.1.0"
+    "yargs-parser": "^18.1.1"
   },
   "devDependencies": {
     "c8": "^7.0.0",
     "chai": "^4.2.0",
     "chalk": "^3.0.0",
+    "coveralls": "^3.0.9",
     "cpr": "^3.0.1",
     "cross-spawn": "^7.0.0",
     "es6-promise": "^4.2.5",`,
      length: 4
    },
    {
      content: `diff --git a/CHANGELOG.md b/CHANGELOG.md
index 15.3.0..15.3.1 100664
--- a/CHANGELOG.md	
+++ b/CHANGELOG.md	
@@ -2,6 +2,14 @@
 
 All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.
 
+### [15.3.1](https://www.github.com/yargs/yargs/compare/v15.3.0...v15.3.1) (2020-03-16)
+
+
+### Bug Fixes
+
+* \_\_proto\_\_ will now be replaced with \_\_\_proto\_\_\_ in parse ([#258](https://www.github.com/yargs/yargs-parser/issues/258)), patching a potential 
+prototype pollution vulnerability. This was reported by the Snyk Security Research Team. ([63810ca](https://www.github.com/yargs/yargs-parser/commit/63810ca1ae1a24b08293a4d971e70e058c7a41e2))
+
 ## [15.3.0](https://www.github.com/yargs/yargs/compare/v15.2.0...v15.3.0) (2020-03-08)`,
      length: 4
    },
    {
      content: `diff --git a/node_modules/string_decoder/node_modules/safe-buffer/README.md b/node_modules/string_decoder/node_modules/safe-buffer/README.md
deleted file mode 100644
index 356e35193..000000000
--- a/node_modules/string_decoder/node_modules/safe-buffer/README.md
+++ /dev/null
@@ -1,586 +0,0 @@
-# safe-buffer [![travis][travis-image]][travis-url] [![npm][npm-image]][npm-url] [![downloads][downloads-image]][downloads-url] [![javascript style guide][standard-image]][standard-url]
-
-[travis-image]: https://img.shields.io/travis/feross/safe-buffer/master.svg
-[travis-url]: https://travis-ci.org/feross/safe-buffer
-[npm-image]: https://img.shields.io/npm/v/safe-buffer.svg
-[npm-url]: https://npmjs.org/package/safe-buffer
-[downloads-image]: https://img.shields.io/npm/dm/safe-buffer.svg
-[downloads-url]: https://npmjs.org/package/safe-buffer
-[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
-[standard-url]: https://standardjs.com
-
-#### Safer Node.js Buffer API
-
-**Use the new Node.js Buffer APIs (\`Buffer.from\`, \`Buffer.alloc\`,
-\`Buffer.allocUnsafe\`, \`Buffer.allocUnsafeSlow\`) in all versions of Node.js.**
-
-**Uses the built-in implementation when available.**
-`,
      length: 5
    }
  ]

  for (const i of files) {
    t.matchSnapshot(colorize(i.content, { headerLength: i.length }))
  }
  t.end()
})
