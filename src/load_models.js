var fs = require('fs');
var path = fs.realpathSync(`${ __dirname }/models`);


var data = fs.readdirSync(path);


data.forEach((file) => {
  var path = `./models/${ file }`;
  console.log(`Model path: ${ path }`);
  require(path);
});




module.exports = data;





