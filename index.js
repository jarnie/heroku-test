const router = require("./routes/locations.js");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.use("/locations", router);

app.listen(port, () => {
  console.log(`example app listening on http://localhost:${port}`);
});
