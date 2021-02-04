const fs = require('fs');

const readFile = (fileName) => {
  return new Promise ((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, content) => {
      if(err) reject(err);
      resolve(content);
    });
  });
};

readFile('meu-arquivo.txt')
  .then(result => console.log(result))
  .catch(err => console.log(err.message));