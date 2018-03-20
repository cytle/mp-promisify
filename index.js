/**
 * 接口Promise化
 * @param {Function} mpFunction - function({ any arguments..., function success, function fail})
 * @return {Function}
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

function keyDataPromisify (mpFunction) {
  return function promisifyApi (key, data) {
    promisify(mpFunction)({ key, data })
  }
}

module.exports = promisify
module.exports.keyDataPromisify = keyDataPromisify
