const bufferToBody = require("../customModules/bufferToBody");
const fs = require("fs");
postResponse = (req, res) => {
  let { method, url } = req;
  if (url === "/submitted") {
    bufferToBody(req, res);
    req.on("close", function () {
      fs.writeFile("formData.txt", JSON.stringify(req.body), (err) => {
        if (err) console.log(err);
      });
    });

    res.write("successfully submitted");
    fs.writeFile("postFile.txt", "hello", (err) => {
      if (err) {
        res.end("error accrued");
      } else {
        setTimeout(() => {
          res.end(" thank you for the time");
        }, 3000);
      }
    });
  }
};

module.exports = postResponse;
