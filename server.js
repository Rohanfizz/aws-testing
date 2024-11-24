const express = require("express");

const app = express();

app.use(express.json());

app.get("/hello", function (req, res) {
    res.status(200).json({
        status: "OK",
        message: "Hello, World!",
    });
});

const port = 8080 | 8081;
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
