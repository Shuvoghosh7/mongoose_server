import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
import bodyParser from "body-parser";
import connection from "./DataBase/ServerDB.js";
dotenv.config()

const app = express();


const port = process.env.PORT || 4300;

//middleware
app.use(cors())
app.use(express.json())

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

connection()

app.get('/', async (req, res) => {
    res.send('itracker server is running')
})

app.listen(port, () => {
    console.log('server is running on port', port)
})