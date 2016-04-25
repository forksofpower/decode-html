# html-decoder
Tiny module that converts HTML codes to human readable characters

## Installation

In a browser:
```html
<script src="html-decode.js"></script>
```

Via [npm](http://npmjs.org/):
```bash
npm install string.prototype.htmlDecode
```

Then, in [Node.js](http://nodejs.org/):
```js
require('string.prototype.htmlDecode');
```
## Usage
```js
var string = '&#x3C;div&#x3E;Test&#x3C;/div&#x3E;';
console.log(string.htmlDecode); // <div>Test</div>
```

## Author
@forksofpower
