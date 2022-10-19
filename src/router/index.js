const express = require("express");

const app = express();
const testRouter = express.Router();
const cors = require("cors")

function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, Math.floor( Math.random() *  3000) )
    })
}

testRouter.get("/list/:id", async (req, res, next) => {
    const id = req.params["id"];
    await delay();
    res.send({
        msg: id
    })
})

app.use(cors({
    origin(origin, callback) {
        if (!origin) {
            callback(null, "*");
            return;
        }
        callback(null, origin);
    },
    credentials: true,
}))

app.use("/api", testRouter)

app.listen("9001", () => {
    console.log("listening 9001");
})