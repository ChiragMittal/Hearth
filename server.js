const express    = require('express');
const morgan     = require("morgan");
const app        = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const neatCsv = require('neat-csv');

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "x-auth");
    res.header ('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE,PATCH');
    next();
});

const port =  9000;
app.use(morgan("dev"));

app.use(express.urlencoded({extended: false}));
app.use(express.json())

const filePath = path.join(__dirname, 'data.csv');
var parsedData
fs.readFile(filePath, async(error, data) => {
  if (error) {
    return console.log('error reading file');
  }
   parsedData = await neatCsv(data);
  //console.log(parsedData);
});

app.post("/search",async (req, res) => {
    const { query, field } = req.body.body;
    const result = []
    try {
           await parsedData.map(item=>{
                if(item[field].toLowerCase().includes(query.toLowerCase())){
                        result.push(item)
                }
            })
         //   console.log(result)
            res.status(200).send(result)
    } catch (e) {
      res.status(400).send(e);
    }
  });


app.listen(port, function () {
    console.log( "Express server listening on port " + port);
});