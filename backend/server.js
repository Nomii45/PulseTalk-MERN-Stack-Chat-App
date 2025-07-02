import express from "express";

const app = express();

    app.get("/api", (req, res)=>{
        res.send("Hello wolrd")
    })
    app.listen(5001, ()=>{
        console.log("Server is running on this port 5001");
})
