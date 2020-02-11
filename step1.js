const fs = require('fs');

path = process.argv[2];

fs.readFile(path, 'utf8', function(err, data) {
  
  if(err) {
    console.log(err.stack);
    process.exit(1);
  }

console.log(`file contents': ${data}`);
});

console.log('reading file');