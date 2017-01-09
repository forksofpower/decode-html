[![Build Status](https://travis-ci.org/forksofpower/html-entity-decode.svg?branch=master)](https://travis-ci.org/forksofpower/html-entity-decode)
# html-entity-decode
Tiny module that decodes HTML entities to symbols.

Mainly built to create a modern polyfill template for myself.

## Installation

In a browser:
```html
<script src="html-entity-decode.js"></script>
```

Via [npm](http://npmjs.org/):
```bash
npm install string.prototype.htmlEntityDecode
```

Then, in [Node.js](http://nodejs.org/):
```js
require('string.prototype.htmlEntityDecode');
```
## Usage
```js
var string = '&#x3C;div&#x3E;Test&#x3C;/div&#x3E;';
console.log(string.htmlEntityDecode); // <div>Test</div>
```

## Author
@forksofpower
