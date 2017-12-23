// Require Module Dependencies
var ethio_no_formatter = {};

function handleErrors(message) {
   this.message = message;
   return 'ERROR: ' + message;

}

ethio_no_formatter.format = function ethio_no_formatter (telNumber) {
  "use strict";

  if (!telNumber) {
    return numArr;

  } else if (typeof telNumber !== 'string' && typeof telNumber !== 'number') {
    return numArr;   
  }

  var numArr = telNumber
      .toString()
      // if there are non-numeric characters it will remove them
      .replace(/\D/g, '') 
      // select last 10 characters
      .slice(-10), 
    arrLen = numArr.length,
    prefix = '',
    suffix,
    last9 = numArr.slice(-9);

  if (arrLen < 9 && arrLen > 10) {
    return numArr;
  }

  if (arrLen === 10) {
    prefix = '+251 (' + numArr.substr(1, 3) + ') ';
  } else if(arrLen === 9) {
    prefix = '+251 (' + numArr.substr(0, 3) + ') ';
  }

  suffix = last9.substr(3, 2) + ' ' + last9.substr(5, 2) + ' ' + last9.substr(7, 2);

  var conv =  prefix + suffix;
  
  return conv;

};

module.exports = ethio_no_formatter.format;