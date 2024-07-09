let getResponse = (req, res) => {
    let { method, url } = req;
  if (url === "/") {
    //html text
    res.write("<h1> welcome back to my service</h1>");
    //plain text
    res.write("hello and bye");
    res.end();
  } else if (url === "/form") {
    res.write(
      "<form action='/submitted' method='POST'><input type='text' name='name'><input type='text' name='course'><button type='submit'>Submit</button></form>"
    );
    res.end();
  } else if (url === "/unsuccessful") {
    res.setHeader("Location", "/form");
    res.statusCode = 302;
    res.end();
  }
};
module.exports = getResponse;
