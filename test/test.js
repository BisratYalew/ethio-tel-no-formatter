var assert = require('assert');
var ethio_no_formatter = require('../index');

describe('Ethiopian Telephone No Formatter', function () {
  "use strict";

  it('should format with country code', function () {
    assert.strictEqual('+251 (912) 34 56 78', ethio_no_formatter('0912345678'));
  });

  it('should format 9 or 10 digits', function () {
    assert.strictEqual('+251 (912) 34 56 78', ethio_no_formatter('0912345678'));
    assert.strictEqual('+251 (912) 34 56 78', ethio_no_formatter('912345678'));
  });


  it('should format number type', function () {
    assert.strictEqual('+251 (912) 34 56 78', ethio_no_formatter(912345678));
	
  });
 
 });