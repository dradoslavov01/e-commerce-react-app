require('dotenv').config()
const express = require('express');
const cors = require('cors');
const db = require('./dbConnection');
const auth = require('./middlewears/auth')

const authController = require('./controllers/authController');
const itemsController = require('./controllers/itemsController');



const app = express();
app.use(express.json());
app.use(cors());

app.use(authController);
app.use(itemsController);

app.get("/user", auth, (req, res) => {
    res.send(req.user);
    id = req.user._id;
});

db();


const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is listening on port ${port}`));