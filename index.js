const express = require("express");
const http = require("http");

const app = express();
const port = process.env.PORT || "3000";
app.set('port', port);
const server = http.createServer(app);
server.listen(port);

console.log(`Servidor ouvindo na porta ${port}`);