let bufferToBody = (req, res) => {
  let dataArr = [];
  req.on("data", (data) => {
    dataArr.push(data);
    console.log(data, dataArr.length);
    req.body;
  });
  req.on("end", () => {
    //let bodyArr = dataArr.toString().split("&"); //also working
    let bodyArr = Buffer.concat(dataArr).toString().split("&");
    req.body = {};
    bodyArr.forEach((v) => {
      let [key, value] = v.split("=");
      req.body[key] = value;
    });
  });
};
module.exports = bufferToBody;
