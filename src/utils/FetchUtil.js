import axios from 'axios';

class FetchUtil {
  static get(...options) {
    return axios.get(options);
  }
}
export default FetchUtil;
