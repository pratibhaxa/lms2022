var express = require('express');
const bodyParser = require('body-parser');
var  monngodb = require('mongodb');
const url =  'mongodb://localhost:27017';
const dbName = 'librarymanagemenntsystem';
const  cors = require('cors');

var app = express();
app.use(bodyParser.json());

app.use(cors());

app.get('/', (request, response) => response.send('Express Server Started'))

app.post('/add-new-book', (request, response) => {
    var varBookId = request.body.bookid;
    var varBookName = request.body.bookname;
    var varBookPrice = request.body.bookprice;
    var varBookAuthorName = request.body.bookauthorname;
    var varBookPublishedDate = request.body.bookpublisheddate;

    monngodb.MongoClient.connect(url, function(error, clientCon) {
        if(error) {
            console.log(error);
        }
        else {
            console.log('Successfully Connected');
            const db = clientCon.db(dbName);
            db.collection('library2022').insertOne({
                bookid: varBookId,
                bookname: varBookName,
                bookprice: varBookPrice,
                bookauthorname: varBookAuthorName,
                bookpublisheddate: varBookPublishedDate
            })
        }
        response.send('New Book Inserted');
    })
})

