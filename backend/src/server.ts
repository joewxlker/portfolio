import { sendEmail } from './Emails/email'

const express = require("express");
const http = require('http');
const app = express(); 
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const server = http.createServer(app); 
const cors = require('cors');

app.use(cors({
    origin:  "*"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

server.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`)
});

app.post('/api/email', (req: any, res: any) => {
    console.log(req.body)
    sendEmail(req.body).then((result: any) => res.send(result))
})