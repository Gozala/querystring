var shims = module.exports = {};

/**
 * Array#indexOf shim.
 */

shims.indexOf = typeof Array.prototype.indexOf === 'function'
  ? function(arr, el) { return arr.indexOf(el); }
  : function(arr, el) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === el) return i;
      }
      return -1;
    };

/**
 * Array.isArray shim.
 */

shims.isArray = Array.isArray || function(arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/**
 * Object.keys shim.
 */

shims.objectKeys = Object.keys || function(obj) {
  var ret = [];
  for (var key in obj) ret.push(key);
  return ret;
};

/**
 * Array#map shim.
 */

shims.map = typeof Array.prototype.map == 'function'
  ? function (arr, fn) { return arr.map(fn) }
  : function (arr, fn) {
      var ret = [];
      for (var i = 0; i < arr.length; i++) ret.push(fn(arr[i]));
      return ret;
    }
