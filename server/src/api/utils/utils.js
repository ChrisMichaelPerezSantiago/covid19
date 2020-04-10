const axios = require('axios').default;

const renameKey = (obj, old_key, new_key) => {
  if (old_key !== new_key) {
    Object.defineProperty(obj, new_key,
      Object.getOwnPropertyDescriptor(obj, old_key));
    delete obj[old_key];
  }
};

const requests = (url) =>{
  const options ={
    method: 'GET',
    responseType: 'json'
  }
  return new Promise((resolve , reject) =>{
    axios.get(url , {options})
      .then(res =>{
        const data = res.data;
        return data;
      }).then(json =>{
        resolve(json)
      })
  })
}

module.exports = {
  renameKey,
  requests
};