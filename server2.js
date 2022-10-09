// https://www.dynetisgames.com/2017/03/06/how-to-make-a-multiplayer-online-game-with-phaser-socket-io-and-node-js/


// these are like our imports
// express serves files to clients
const express = require("express");
const app = express();
// import the http module, cause we're making an http server
const server = require("http").Server(app);
// import socket.io, to use to handle connections
const io = require("socket.io")(server); /* .listen(server); */
const port = 8001


// deliver files depending on the path requested
app.use("www",express.static(__dirname+"www2"));
app.use("/css",express.static(__dirname+"/www2/css"));
app.use("/js",express.static(__dirname+"/www2/js"));
app.use("/assets",express.static(__dirname+"/www2/assets"));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index2.html");
});

server.listen(port, function(){
    console.log("Server2: Listening on ("+server.address().port+")");
});

