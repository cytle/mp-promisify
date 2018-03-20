'use strict'

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i]

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key]
      }
    }
  }

  return target
}

/**
 * 接口Promise化
 * @param {Function} mpFunction - function({ any arguments..., function success, function fail})
 * @return {Function} - function({ any arguments...})
 */
var promisify = function promisify (mpFunction) {
  return function (options) {
    return new Promise(function (resolve, reject) {
      return mpFunction(_extends({}, options, {
        success: resolve,
        fail: function fail (err) {
          return reject(new Error(err.errMsg))
        }
      }))
    })
  }
}

/**
 * 接口Promise化, 针对key data形式，如setStorage
 * @param {Function} mpFunction - function({ any arguments..., function success, function fail})
 * @return {Function} - function(key, data)
 */
var keyDataPromisify = function keyDataPromisify (mpFunction) {
  return function (key, data) {
    return promisify(mpFunction)({ key: key, data: data })
  }
}

module.exports = promisify
module.exports.keyDataPromisify = keyDataPromisify
