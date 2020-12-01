const fs = require('fs');

const readFile = (file) => {
  try {
    const data = fs.readFileSync(file, 'utf8');
    return data.toString();
  } catch (error) {
    throw error;
  }
}

module.exports = readFile;