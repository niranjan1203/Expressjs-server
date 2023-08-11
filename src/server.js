const express = require("express");
const app = express();
const PORT = 4001;

app.use(express.json()); 

var array = [[2, 4], [6, 8], [10, 12]]; 

app.get("/", (_req, res) => {
    console.log(array);
    res.send(`array: ${JSON.stringify(array)}`);
});

app.post("/", (req, res) => {
    const newData = req.body;
    console.log("Received data:", newData);
    array.push(newData);

    res.send("Data added to the array successfully!");
    res.send(`array: ${JSON.stringify(array)}`);
});

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});