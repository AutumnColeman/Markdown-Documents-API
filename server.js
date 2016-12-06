const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.put('/documents/:filepath', function(req, res) {
  var filepath = 'data/' + req.params.filepath;
  var contents = req.body.contents;
  console.log(contents);

  fs.writeFile(filepath, contents, function(err) {
    if (err) {
      res.status(500);
      res.json({status: 'Failed Because:', error: err.message});
    } else {
      res.json({ message: 'Yay! File ' + filepath + ' saved.' });
    }
  });
});

app.get('/documents/:filepath', function(res, req) {
  if (err) {
    res.status(500);
    res.json({status: 'Failed Because:', error: err.message});
  } else {

  }
});


app.listen(3000, function() {
  console.log('Listening on *3000');
});
