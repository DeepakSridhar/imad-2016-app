var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={ articleone:{
title: 'Article One| Deepak Sridhar',
heading: 'Article One: About Myself', 
date: 'Sep 26 2016',
content: `<p>
Hi, I'm Deepak. I'm a graduate student at Mcgill University.
</p>
<p>
Hi, I'm Deepak. I'm a graduate student at Mcgill University.
</p>
<p>
Hi, I'm Deepak. I'm a graduate student at Mcgill University.
</p>`
},
articletwo:{title: 'Article Two| Deepak Sridhar',
heading: 'Article Two: Projects', 
date: 'Sep 28 2016',
content: `<p>
Hi, I have done several projects in robotics and electronics.
</p>`

},
articlethree:{title: 'Article Three| Deepak Sridhar',
heading: 'Article Three: Experience', 
date: 'Sep 28 2016',
content: `<p>
Hi, I have good amount of research experience.
</p>`}};

function createTemplate (data) {
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
    var htmlTemplate=`
    <html>
    <head>
        <title>
            $(title)
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                
            
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h1>
                $(heading)
            </h1>
            <div>
                $(date)
            </div>
            <div>
         $(content)
            </div>
            </div>
        </body>
        
    
</html>`;

return htmlTemplate;
    
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
