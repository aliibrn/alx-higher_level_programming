#!/usr/bin/node
exports.converter = function(base) {
  return function(n) {
    return n < base ? 
           n.toString(base) : 
           exports.converter(base)(Math.floor(n / base)) + (n % base).toString(base);
  };
};
