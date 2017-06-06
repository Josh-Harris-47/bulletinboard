const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userCtrl = require('./controllers/userCtrl.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + "/public"));

app.get("/message", userCtrl.read);
app.post("/message", userCtrl.create);
app.put("/message/:id", userCtrl.update);
app.delete("/message/:id", userCtrl.destroy);

app.listen(8000, function(){
  console.log("your server is running on 8000");
});
