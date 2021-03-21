import axios from 'axios'
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}
const service = axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  timeout: 20000
})
function request (api, callBack) {
  return new Promise((resolve, reject) => {
    if (api.method === 'get') {
      var count = 0
      api.url += '?'
      for (var key in api.inputData) {
        count += 1
        if (count > 1) {
          api.url += '&' + key + '=' + api.inputData[key]
        } else {
          api.url += key + '=' + api.inputData[key]
        }
      }
    }
    service({
      url: api.url,
      method: api.method,
      data: api.inputData
    }).then(resData => {
      var res = resData.data
      var resKey = Object.keys(res)
      for (var key in api.resData) {
        var resOk = false
        if (resKey.indexOf(key) < 0) {
          console.log(api.url + '中缺少必要参数:' + key)
          break
        } else {
          resOk = true
        }
      }
      if (resOk) {
        callBack(res)
      }
    }).catch(error => {
      const errorText = codeMessage[error.response.status]
      console.log('服务器请求错误', errorText)
      reject(error)
    })
  })
}
export default request
