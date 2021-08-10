const express = require('express');
const app = express();

app.listen(4000, () => console.log("Server Started."))

app.use(express.static('public'))

app.use(express.json({ limit:'1mb' }));

app.post('/api', (request,response) => {
    console.log(request.body);
    response.json({
        status:"success" // this can be anything we are making this object what we want. 
    })
})