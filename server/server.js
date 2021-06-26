const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello');

});

const port = process.env.PORT || 4000

app.listen(port || 4000, () => console.log(`Server is listening on port ${port}`));