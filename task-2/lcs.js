const fs = require("fs");
const path = require("path");
const { sha3_256 } = require("js-sha3");
 
const [,, filesDir = "./files", EMAIL = "your@email.com"] = process.argv;
 
function sortKey(hex) {
  let product = 1n;
  for (const ch of hex)
    product *= BigInt(parseInt(ch, 16) + 1);
  return product;
}
 
const hashes = fs.readdirSync(filesDir)
  .map((name) => sha3_256(fs.readFileSync(path.join(filesDir, name))))
  .sort((a, b) => {
    const ka = sortKey(a), kb = sortKey(b);
    return ka < kb ? -1 : ka > kb ? 1 : 0;
  });
 
const answer = sha3_256(hashes.join("") + EMAIL.toLowerCase());
 
console.log(answer);
 
