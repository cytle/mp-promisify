# mp-promisify

小程序接口promise化，`async`/`await`水到渠成

## 使用

```js
const promisify = require('mp-promisify');

const request = promisify(wx.request);
const setStorage = promisify.keyDataPromisify(wx.setStorage);

request({
  url: 'foo/1'
}).then((result) => {
  console.log("The result of request foo/1", result);
}, (e) => {
  console.log("request had error", e);
});

setStorage('foo', '123')
  .then((result) => {
    console.log("The result of setStorage foo", result);
  }, (e) => {
    console.log("setStorage had error", e);
  });
```
