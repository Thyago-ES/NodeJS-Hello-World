const express = require("express");

const server = express();

server.get("/hello", (req, res) => {
	return res.json({ title: "Hello world", message: "Olá amigo, tranquilo?" });
});

//porta 3000, 5000, 8000, 8080
server.listen(3000);
