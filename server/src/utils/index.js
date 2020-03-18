const cloudscraper = require('cloudscraper')
const imageToBase64 = require("image-to-base64");
const zsExtract = require("zs-extract");


const MergeRecursive = (obj1 , obj2) => {
  for(var p in obj2) {
    try{
      // Property in destination object set; update its value.
      if(obj2[p].constructor == Object){
        obj1[p] = MergeRecursive(obj1[p], obj2[p]);
      }else{
        obj1[p] = obj2[p];
      }
    }catch(e){
      // Property in destination object not set; create it and set its value.
      obj1[p] = obj2[p];
    }
  }
  return obj1;
}

const imageUrlToBase64 = async(url) => {
  let res = await cloudscraper({
    url,
    method: "GET",
    encoding: null
  });

  return Buffer.from(res).toString("base64");
};

const urlify = async(text) =>{
  const urls = [];
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  text.replace(urlRegex , (url) =>{
    urls.push(url)
  });
  return Promise.all(urls);
};

const decodeZippyURL = async(url) =>{
  const mp4 = await zsExtract.extract(url);
  return mp4.download;
}


module.exports = {
  MergeRecursive,
  imageUrlToBase64,
  urlify,
  decodeZippyURL
}