import express from "express"
import cors from "cors"

var app = express();
app.use(cors())
app.use(express.json())
app.listen(3000, () => {
 console.log("Server running on port 3000");
});

app.get("/technica", (req, res) => {
    res.send("Hello Technica 2023!!")
})

