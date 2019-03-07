const express = require("express");
const app = express();

//CORS Cross Origin Ressource Sharing
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");

  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  next();
});
// fin CORS

//body parser pour pouvoir atteindre le body de la requete post
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Files
const fs = require("fs");
const data = fs.readFileSync("tableaux.json");

// routes
app.get("/", (req, res) => {
  res.send("Hello");
});
// get tableaux
app.get("/api/tableaux", (req, res) => {
  const data = fs.readFileSync("tableaux.json");
  const tableaux = JSON.parse(data);
  res.send(JSON.stringify(tableaux));
});

// post tableaux
app.post("/api/writetableaux", (req, res) => {
  const tableaux = JSON.parse(data);
  console.log(req.body);
  const writeFinished = () => {
    //res.send("Fichier écrit");
    console.log("Fichier écrit");
  };
  fs.writeFile(
    "tableaux.json",
    JSON.stringify(req.body, null, 2),
    writeFinished
  );
  res.send("Fichier en cours d'écriture");
});

// Ecoute les requêtes sur le port 3003
app.listen(3003, () => {
  console.log("Listening on port 3003");
});
