import request from '@/utils/request.js'
export function getBaiduTop (data, callBack) {
  var api = {
    'url': '/iclient/api/top/',
    'method': 'get',
    'inputData': {
      'key': data.key
    },
    'resData': {
      'success': null,
      'result': null
    }
  }
  return request(api, callBack)
}
