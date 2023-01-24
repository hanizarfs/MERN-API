const express = require("express");

const app = express();

app.use(() => {
  console.log("Hello Server... Halo David")
})

app.listen(4000);