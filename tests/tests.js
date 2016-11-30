var assert = require('assert'),
    assertEquals = assert.equal,
    assertThrows = assert['throws'];

require('../html-entity-decode.js');

var nullVal = null;

assertEquals(('&lt;'.htmlEntityDecode()), '<');
assertEquals('&gt;'.htmlEntityDecode(), '>');
assertEquals('&amp;'.htmlEntityDecode(), '&');
assertEquals('&apos;'.htmlEntityDecode(), '\'');
assertEquals('&#x3C;div&#x3E;Test&#x3C;/div&#x3E;'.htmlEntityDecode(), '<div>Test</div>');

assertThrows(function() { String.prototype.htmlEntityDecode.call(null); }, TypeError);
