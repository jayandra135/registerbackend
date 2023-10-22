import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import RegisterRouter from "./router/register.router";
var app = express();
const PORT = process.env.PORT || 8001;
dotenv.config();
app.use(express.json());
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const uri = process.env.DB_NAME;
app.use(cors(corsOptions));
app.use(express.static(__dirname));
app.listen(PORT, () => {
  console.log("Your server running on http://localhost:" + PORT);
});

app.use("/register", RegisterRouter);

async function main() {
  const uri = process.env.DATABASE;
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to mongodb");
    })
    .catch(() => {
      console.log("could not connect to mongodb");
    });
}
main();
