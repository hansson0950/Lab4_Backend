const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("client"));

app.use(express.json());

app.listen(PORT, () => {
    console.log("App running on port", PORT);
});