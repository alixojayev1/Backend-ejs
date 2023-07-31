import express from "express";
import "dotenv/config";
import path from "path";
import fs from "fs"
import { render } from "ejs";

function myUser() {
  try {
    const expres = express();
    expres.use(express.static(path.join(process.cwd(), "src", "public")));
    expres.set("view engine", "ejs");
    expres.set("views")
    expres.get("/user", (req, res) => {
     const data = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), "src",  "model", "user.json"))
     )
     console.log(data);
     res.render('index', {data})

    });

    expres.listen(
      process.env["PORT"],
      process.env["LOCAL"],
      console.log("create server 5050")
    );
  } catch (error) {
    console.log(error);
  }
}
myUser();
