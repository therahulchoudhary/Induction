const http = require('http');
var formidable = require('formidable');
var fs = require('fs');
const CONTENT_TYPE = {'Content-Type':'application/json'};


http.createServer(function (req, res) {
  console.log("faje");
  res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Request-Method', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST, GET');
//   res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Content-Type','application/x-www-form-urlencoded');
    // upload files
    if (req.url == '/fileupload') {
        console.log("faef");
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filekey.path;
            var newpath = '../Components/src/assets/' + files.filekey.name;
            var ext = files.filekey.type;
            console.log(ext);
            var data = fields.product_id;
            if(ext =='image/png' || ext == 'image/jpg' || ext == 'image/jpeg'){
                fs.writeFile(newpath,data, function (err) {
                    if (err) throw err;
                    res.writeHead(200,CONTENT_TYPE);
                    res.write('File uploaded and moved!');
                    res.end();
                    console.log('File written!');
                });
                // Delete the file
                fs.unlink(oldpath, function (err) {
                    if (err) throw err;
                    console.log('File deleted!');
                });
            }else{
                res.writeHead(406,CONTENT_TYPE);
                res.write('File Not Valid');
                res.end();
            }
        });
    }
}).listen(3000); 
