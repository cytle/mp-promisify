/**
 * 接口Promise化
 * @param {Function} mpFunction - function({ any arguments..., function success, function fail})
 * @return {Function} - function({ any arguments...})
 */
function promisify (mpFunction) {
  return function promisifyApi (options) {
    return new Promise(function execute (resolve, reject) {
      mpFunction((Object.assign({}, options, {
        success: resolve,
        fail: err => reject(new Error(err.errMsg))
      })))
    })
  }
}

/**
 * 接口Promise化, 针对key data形式，如setStorage
 * @param {Function} mpFunction - function({ any arguments..., function success, function fail})
 * @return {Function} - function(key, data)
 */
function keyDataPromisify (mpFunction) {
  return function promisifyApi (key, data) {
    promisify(mpFunction)({ key, data })
  }
}

module.exports = promisify
module.exports.keyDataPromisify = keyDataPromisify
