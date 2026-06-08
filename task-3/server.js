const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/qudratov_com_26_gmail_com", (req, res) => {
  const rawX = req.query.x;
  const rawY = req.query.y;
  if (!Number.isInteger(Number(rawX)) || !Number.isInteger(Number(rawY)) || Number(rawX) <= 0 || Number(rawY) <= 0) {
    return res.type("text/plain").send("NaN");
  }
  res.type("text/plain").send(lcm(rawX, rawY));
});

function lcm(x, y) {
    return String(x * y / gcd(x, y));
}

function gcd(x, y) {
  while (y !== 0) {
    let temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}