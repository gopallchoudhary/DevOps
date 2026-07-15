const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.json({ message: "Dockerize the node app v2" });
});

app.listen(port, () => {
    console.log(`Server started on port:${port}`);
});