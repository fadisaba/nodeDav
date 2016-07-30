var fs = require('fs-extra');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.post('/createWord',function(req,res,next)
{
  var docPath=req.body.docPath;
  var docPathArray=docPath.split('/');

  var wordDocFile=(__dirname + "/node_modules/jsDAV/test/assets");

 /* var newFolderPath=wordDocFile+"/"+docPathArray[0]+"/"+docPathArray[1]+"/"+docPathArray[2];
  if (!fs.existsSync(newFolderPath)){
      fs.mkdirSync(newFolderPath);
  }*/

  var folderTempPath="";
 /* docPathArray.forEach(function(_folderName,_index)
  {
    if(_index<docPathArray.length-1)
    {
      folderTempPath+="/"+_folderName;
      if (!fs.existsSync(wordDocFile+""+folderTempPath)){
          fs.mkdirSync(wordDocFile+""+folderTempPath);
      }
    }
  });*/
  fs.copy(wordDocFile+'/app4office.docx', wordDocFile+"/"+docPath, function (err) {
    if (err)
    {
      console.error(err);
      res.send("failed");
    }
    else
    {
      //console.log("success!");
      res.send("success");
    }

  });

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
