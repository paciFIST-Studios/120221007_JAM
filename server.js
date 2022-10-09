const http = require("http");
const crypto = require("crypto");
const static = require("node-static");
const file = new static.Server("./");
const server = http.createServer((req, res) => {
    req.addListener("end", () => file.serve(req, res)).resume();
});
const port = 8000;
server.listen(port, () => console.log(`Server running at http://localhost:${port}`));

server.on("upgrade", (req, socket) => {
    // only upgrade websocket requests
    if(req.headers["upgrade"] !== "websocket"){
        socket.end("HTTP/1.1 400 Bad Request");
        return;
    }
    console.log("upgrading websocket");

    // read websocket key provided by client
    const acceptKey = req.headers["sec-websocket-key"];
    // generate the response value
    const hash = generateLocalHash(acceptKey)
    // http response
    const responseHeaders = ["HTTP/1.1 101 Web Socket Protocol Handshake", "Upgrade: WebSocket", "Connection: Upgrade", "Sec-WebSocket-Accept: ${hash}"];
    // write response back to client socket
    // add two newlines, so the browser recognizes end-of-response
    socket.write(responseHeaders.join("\r\n")+"\r\n\r\n");
});


function generateLocalHash(acceptKey){
    return crypto
    .createHash("sha1")
    .update(acceptKey+"218EAFA5-E914–HKDA-95CA-C5A10DC85558", "binary")
    .digest("base64");
}


server.on("data", (req, socket) => {
    console.log(`Request: ${req}`);
});
