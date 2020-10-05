// import p5 from 'p5';
const express = require('express');
const app = express();


class Circle {
        constructor(x, y, r) {
            this.x = x;
            this.y = y;
            this.r = r;
        }
    }

let players = [];
let food = [];
let min = Math.ceil(-300);
let max = Math.floor(700);
let player1 = new Circle(0, 0, 36);
players.push(player1);

for (let i = 0; i < 100; i++) {
    let obj = new Circle(Math.floor(Math.random() * (max - min)) + min, Math.floor(Math.random() * (max - min)) + min, 20);
    food.push(obj);
}

app.use(function (req, res, next) {
    var origin = 'http://127.0.0.1:8080';
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    // текущие координаты курсора
    // let x = +req.query.x;
    // let y = +req.query.y;
    
    res.send(JSON.stringify({"f": food, "p": player1}));
    console.log(req.query.x, req.query.y)

    // res.writeHead(200, {
    //     'Content-Type': 'text/plain; charset = utf-8'
    // });
});

app.listen(3000, () => {
    console.log('Сервер запущен');
});