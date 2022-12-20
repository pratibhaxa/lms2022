const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'idontknow',
  database: 'lmsDB',
});

// send data for username and password to the Users table
app.post('/register', (request, response) => {
    const username = request.body.usernameReg;
    const password = request.body.passwordReg;
    // can add uuid here for id column in db
    db.query(
        'INSERT INTO Users (username, password) VALUES (?, ?)', 
        [username, password],
        (error, result) => {
            console.log(error);
        }
    );
});

app.post('/login', (request, response) => {
    const username = request.body.usernameLog;
    const password = request.body.passwordLog;

    db.query(
        'SELECT * FROM Users WHERE username = ? AND password = ?',
        [username, password],
        (error, result) => {
            if(error) {
                response.send({error: error})
            }
            else {
                if(result.length > 0) {
                    response.send(result)
                }
                else {
                    response.send({message: 'Wrong username or password'})
                }
            }
        }
    );
});

app.post('/add-new-book-draft', (request, response) => {
    const id = request.body.idUI;
    const title = request.body.titleUI;
    const author = request.body.authorUI;
    const description = request.body.descriptionUI;
    const dopublish = request.body.dopublishUI;
    const price = request.body.priceUI;
    var isbestseller = request.body.isbestsellerUI;

    if(isbestseller.checked === true) {
        isbestseller = 'true';
    }
    else {
        isbestseller = 'false';
    }

    db.query(
        'INSERT INTO Books (id, title, author, description, dopublish, price, isbestseller) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [id, title, author, description, dopublish, price, isbestseller],
        (error, result) => {
            console.log(error);
        }
    );
});

app.listen(3001, () => {
  console.log('Running server');
});

