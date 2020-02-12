const fs = require('fs');
const axios = require("axios");

path = process.argv[2];

// from:
// https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
function isURL(string){
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;  
  }
}

async function getURL(path){
  let response = await axios.get(path);
  console.log(response.data)
  return response.data
}

if(isURL(path)){
  getURL(path);
} else{
  fs.readFile(path, 'utf8', function (err, data) {

    if (err) {
      console.log(err.stack);
      process.exit(1);
    }

    console.log(`file contents': ${data}`);
  });
}

console.log('reading inputted destination');