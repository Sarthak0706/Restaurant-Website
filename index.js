const connectToMongoDB = require("./db");
connectToMongoDB();

const express = require("express");
const app = express();
const port = 5000;
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", require("./Routes/Auth"));
app.use("/api", require("./Routes/item"));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
