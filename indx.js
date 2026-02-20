const express = require("express");
const app = express();


const cloud = [
  {
    id: 1, name: 'cloud1'
  },
  {
    id: 2, name: 'cloud2'
  },
  {
    id: 3, name: 'cloud3'
  },
];

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/api/cloud", (req, res) => {
  res.send(cloud);
});

app.get("/api/cloud/:id", (req, res) => {
 let foundCloud = cloud.find(c => c.id === parseInt(req.params.id));
 if (!foundCloud) res.status(404).send('the cloud was not found in given id'); // 404
 else res.send(foundCloud);
});

// PORT
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`listening on port ${port}...`));

app.post("/api/cloud", (req, res) => {
  // Add post logic here
  res.send("POST method");
});

app.put("/api/cloud/:id", (req, res) => {
  // Add put logic here
  res.send("PUT method");
});

app.delete("/api/cloud/:id", (req, res) => {
  // Add delete logic here
  res.send("DELETE method");
});
