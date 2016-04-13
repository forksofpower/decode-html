var assert = require('assert'),
    assertEquals = assert.equal,
    assertThrows = assert['throws'];
    
require('../html-decoder.js');

var nullVal = null;

assertEquals(('&lt;'.htmlDecode()), '<');
assertEquals('&gt;'.htmlDecode(), '>');
assertEquals('&amp;'.htmlDecode(), '&');
assertEquals('&apos;'.htmlDecode(), '\'');
assertEquals('&#x3C;div&#x3E;Test&#x3C;/div&#x3E;'.htmlDecode(), '<div>Test</div>');

assertThrows(function() { String.prototype.htmlDecode.call(null); }, TypeError);