const express = require("express");
const path = require("path");
const pages = require("./pages");

const server = express();

server
  // utilizando os arquivos estáticos
  .use(express.static("public"))

  // configurar template engine
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs")

  // rotas

  .get("/", pages.index);
  server.get("/orphanages", pages.orphanages);
  server.get("/orphanage", pages.orphanage);
  server.get("/create-orphanage", pages.createOrphanage);

server.listen(5500);
