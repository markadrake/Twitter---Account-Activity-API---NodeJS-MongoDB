const express = require("express");
this.app = express();

app.get("/twitter", (req, res) => res.send("Hello World"));

app.listen(3000, () => console.log("Example app listening on port 3000!"));