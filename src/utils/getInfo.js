import axios from 'axios';

function getInfo(_url, data, callback) {
  axios.get(_url, {
    params: data
  })
  .then((response) => {
    // let Listdata = response.data.data
    callback(response.data);
  })
  .catch((error) => {
    callback(error);
  });
}
export default getInfo;
