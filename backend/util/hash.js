const bcrypt = require("bcrypt"); //importing bcrypt library
const salt = 10;

function generatePasswordHash(password) {
  return new Promise(async (resolve, reject) => {
    try {
      let hash = await bcrypt.hash(password, salt);
      resolve(hash);
    } catch (e) {
      reject(e);
    }
  });
}

function comparePasswordHash(password, hash) {
  return new Promise(async (resolve, reject) => {
    try {
      let match = await bcrypt.compare(password, hash);
      resolve(match);
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = {
	generatePasswordHash,
	comparePasswordHash
};