const experss = require("express");
const app = experss();


const cloud = [
  {
    id: 1, name = 'cloud1'
  },
  {
    id: 2, name = 'cloud2'
  },
  {
    id: 3, name = 'cloud3'
  },
];

app.get("/", (Req, Res) => {
  Response.send("hello world");
});

app.get("/api/cloud", (req, res) => {
  res.send(cloud);
});

app.get("/api/cloud/:id", (req, res) => {
 let cloud = cloud.find(c => c.id === parseInt(req.params.id));
 if (!cloud) res.status(404).send('the cloud was not found in give id'); // 404
});

app.post(' k')
app.listen(5000, () => console.log("listening on 5000..."));

//port

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listen on port ${port}...`));

app.post();
app.put();
app.delete();
