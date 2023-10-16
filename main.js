const express = require('express')
const app = express()


const http= require('http').Server(app)
const port = process.env.PORT || 8080;

//

// routes
app.get('/', (req, res) => {
    res.json("get Request");
});


app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
});