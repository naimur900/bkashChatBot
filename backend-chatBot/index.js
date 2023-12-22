const express = require("express");
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
const { replyRoute } = require("./routes/replyRoute");
const cors = require("cors")

dotenv.config()
const port = process.env.PORT;


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use("/", replyRoute);

app.listen(port, () => {
  console.log("Server is running on port", port);
});
