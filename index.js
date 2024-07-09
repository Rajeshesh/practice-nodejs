// let setTimeoutModule = require("./customModules/setTimeout");
// let promiseModule = require("./customModules/promise");
// setTimeoutModule("I am the first one");
// promiseModule();

let index = require("./customModules/index");
let fs = require("fs");
let http = require("http");
const bufferToBody = require("./customModules/bufferToBody");
const getResponse = require("./resModules/getRes");
const postResponse = require("./resModules/postRes");
let firstServer = http
  .createServer((req, res) => {
    console.log(index);
    let { method, url } = req;
    if (!method) process.exit();

    res.setHeader("Content-Type", "text/html");

    if (method === "GET") {
      getResponse(req, res);
    } else if (method === "POST") {
      postResponse(req, res);
    }

    console.log("hi");
  })
  .listen(3001);
