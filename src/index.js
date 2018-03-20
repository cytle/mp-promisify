/**
 * 接口Promise化
 * @param {Function} mpFunction - function({ any arguments..., function success, function fail})
 * @return {Function} - function({ any arguments...})
 */
const promisify = mpFunction => options =>
  new Promise((resolve, reject) =>
    mpFunction({
      ...options,
      success: resolve,
      fail: err => reject(new Error(err.errMsg))
    }))

/**
 * 接口Promise化, 针对key data形式，如setStorage
 * @param {Function} mpFunction - function({ any arguments..., function success, function fail})
 * @return {Function} - function(key, data)
 */
const keyDataPromisify = mpFunction => (key, data) =>
  promisify(mpFunction)({ key, data })

module.exports = promisify
module.exports.keyDataPromisify = keyDataPromisify
