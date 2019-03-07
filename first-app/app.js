//sayHello("Yvan");
/**
 * Installer Node.js Extension Pack dans visual studio code pour simplifier la programmation node
 *
 * global remplace windows même si var utilisé hors d'une fonction n'appartient pas à global
 * Chaque fichier est considéré comme un "module", c'est à dire que par défaut toutes les variables sont
 * encapsulée (privée) dans ce fichier (module)
 * Pour utiliser des variables d'un module dans un autre module, il faudra explicitement les exporter et les importer
 * Exporter : module.exports.log = log; // pour exporter un objet
 * module.exports = log // pour exporter une fonction
 * Importer : var logger = require("./logger");
 * Outil pour vérifier le code. Ex :  jshint app.js
 * Il existe de nombreux modules intégrés à node : path, os, fs, http, ...
 *
 *
 * Events à utiliser notamment avec HTTP module
 */
const log = require("./logger");
//log("Hello bob");
/* console.log(exports);
console.log(require);
console.log(module);
console.log(__filename);
console.log(__dirname);
*/
/* const path = require("path");
const os = require("os");
const fs = require("fs");
const http = require("http");
const file = fs.readdir("./", function(err, files) {
  if (err) console.log("erreur");
  else console.log(files);
});

const EventEmitter = require("events"); // class
const emitter = new EventEmitter(); // instance
emitter.on("messageLogged", arg => {
  console.log("Listener called", arg);
});
emitter.emit("messageLogged", { id: 1, url: "http://" }); // lance un événement */
//écoute l'événement

//console.log(file);

// Files
const fs = require("fs");
const data = fs.readFileSync("tableaux.json");

// HTTP
const http = require("http");

//
res.header("Access-Control-Allow-Origin", "*");
const server = http.createServer((request, response) => {
  if (request.url === "/") {
    response.write("Hello world");
    response.end();
  }
  if (request.url === "/json") {
    response.write(JSON.stringify([{ name: "Bob" }, { name: "Simon" }]));
    response.end();
  }
  if (request.url === "/words") {
    const data = fs.readFileSync("words.json");
    const words = JSON.parse(data);
    response.write(JSON.stringify(words));
    response.end();
  }
  if (request.url === "/tableaux") {
    const data = fs.readFileSync("tableaux.json");
    const tableaux = JSON.parse(data);
    response.write(JSON.stringify(tableaux));
    response.end();
  }
  if (request.url === "/writetableaux") {
    const tableaux = JSON.parse(data);
    console.log(tableaux);
    const writeFinished = () => {
      //response.write("Fichier écrit");
      console.log("Fichier écrit");
    };
    fs.writeFile(
      "words.json",
      JSON.stringify(tableaux, null, 2),
      writeFinished
    );

    response.write("Fichier en cours d'écriture");
    response.end();
  }
});
server.listen(3002);
console.log("Listening on port 3002");
// fin HTTP

//Express REST : voir répertoire express-memogile
