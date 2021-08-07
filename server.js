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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

const filePath = path.join(__dirname, 'data.csv');
var parsedData
fs.readFile(filePath, async(error, data) => {
  if (error) {
    return console.log('error reading file');
  }
   parsedData = await neatCsv(data);
  //console.log(parsedData);
});

app.post("/search", express.json(), async (req, res) => {
    var { query, field } = req.body;
    
  //  const encodedQuery = encodeURIComponent(query);
    //const maxResults = 30;

    const result = []
    // if(field == "ADDRESS"){
    //     query = query.toLowerCase()
    // }
    console.log(query)
    try {
            parsedData.map(item=>{
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