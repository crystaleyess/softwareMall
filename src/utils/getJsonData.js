import axios from 'axios'
function getJson (path) {
  return axios.get(path)
}
export {getJson}
