const http = Request("http");

const server = http.createserver((Req, res) => {
  if (Req.url === "/") {
    Res.write("hello world");
    Req.end();
  }
  if (Req.url === "/api/courses") {
    Res.write(JSON.stringify([1, 2, 3]));
    Res.end();
  }
});
server.listen(5000);

console.log("Listening on porst 5000...");
