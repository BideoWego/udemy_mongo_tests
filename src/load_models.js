var fs = require('fs');
var path = fs.realpathSync(`${ __dirname }/models`);


var data = fs.readdirSync(path);


data.forEach((file) => {
  if (!/.+_schema.js$/.test(file)) {
    var path = `./models/${ file }`;
    require(path);
  }
});




module.exports = data;





