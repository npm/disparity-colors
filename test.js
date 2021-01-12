const tap = require('tap')
const { test } = tap

const colorize = require('./index.js')

// NOTE: $ cat tap-snapshots/test.js-TAP.test.js provides
// a handy quick visual check to visualize color output

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

test('no diff strings', t => {
  t.equal(
    colorize('foo'),
    '\u001b[33mfoo\u001b[39m',
    'should colorize as part of header'
  )
  t.equal(
    colorize('foo\nbar\nlorem'),
    '\u001b[33mfoo\u001b[39m\n\u001b[33mbar\u001b[39m\nlorem',
    'should colorize header lines'
  )
  t.equal(
    colorize('foo\nbar\nlorem', { headerLength: 0 }),
    'foo\nbar\nlorem',
    'should print no header'
  )
  t.end()
})

test('simple diff', t => {
  t.matchSnapshot(
    colorize(`--- a/src/index.js
+++ b/src/index.js
@@ -1,4 +1,5 @@
 "use strict";
+"use foo";

 const os = require("os");`),
    'should colorize simple diff'
  )
  t.end()
})

test('no header', t => {
  t.matchSnapshot(
    colorize(`@@ -1,4 +1,5 @@
 "use strict";
+"use foo";

 const os = require("os");`, { headerLength: 0 }),
    'should colorize with no header'
  )
  t.end()
})

test('invalid header options', t => {
  const str = `--- a/src/index.js
+++ b/src/index.js
@@ -1,4 +1,5 @@
 "use strict";
+"use foo";

 const os = require("os");`
  t.matchSnapshot(
    colorize(str, {}),
    'should default to 2-lines header on headerLength: undefined'
  )
  t.matchSnapshot(
    colorize(str, { headerLength: {} }),
    'should default to 2-lines header on headerLength: {}'
  )
  t.matchSnapshot(
    colorize(str, { headerLength: NaN }),
    'should default to 2-lines header on headerLength: NaN'
  )
  t.matchSnapshot(
    colorize(str, { headerLength: '' }),
    'should default to 2-lines header on headerLength: empty string'
  )
  t.matchSnapshot(
    colorize(str, { headerLength: /foo/g }),
    'should default to 2-lines header on headerLength: regex'
  )
  t.matchSnapshot(
    colorize(str, { headerLength: null }),
    'should default to 2-lines header on headerLength: null'
  )
  t.end()
})

test('custom header length', t => {
  t.matchSnapshot(
    colorize(`diff --git a/src/index.js b/src/index.js
index a0a7b09..9f54025 100644
--- a/src/index.js
+++ b/src/index.js
@@ -1,4 +1,5 @@
 "use strict";
+"use foo";

 const os = require("os");`, { headerLength: 4 }),
    'should colorize header lines'
  )
  t.end()
})

test('only header', t => {
  t.matchSnapshot(
    colorize(`diff --git a/lib/fund.js b/lib/fund.js
old mode 100644
new mode 100755`, { headerLength: 3 }),
    'should colorize all output as header'
  )
  t.end()
})

test('long header example', t => {
  t.matchSnapshot(
    colorize(`diff --git a/node_modules/string_decoder/node_modules/safe-buffer/README.md b/node_modules/string_decoder/node_modules/safe-buffer/README.md
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
-`, { headerLength: 5 }),
    'should colorize long header'
  )
  t.end()
})

test('header greater than amount of lines', t => {
  t.matchSnapshot(
    colorize(`diff --git a/lib/fund.js b/lib/fund.js
old mode 100644
new mode 100755`, { headerLength: 6 }),
    'should not fail and colorize lines properly'
  )
  t.end()
})
