const express = require('express');
const app = express();

const port = process.env.PORT || 8001;

app.use(express.json());

app.use(function (req, res, next) {
    //Enabling CORS 
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:8000");
    res.header("Access-Control-Allow-Methods", "OPTIONS,GET,POST,HEAD,PUT");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization, X-Token");
	res.header("Last-Modified", new Date());
	res.header("Cache-control", "no-store, no-cache, must-revalidate");
	//res.header("Cache-control: post-check=0, pre-check=0", false);
	res.header("Pragma", "no-cache");
	next();
});


app.post("/signup", (req, res) => {
    console.log(req.body);
    if (req.body.email === "ermakov.1828@gmail.com" && req.body.password === "123") {
        console.log('hi')
        res.status(200).json({"message":"ok"});
    } else {
        res.status(409).json({"message":"user already exists"});
    }
    // res.status(200);
})

app.listen(port, function () {
	console.log(`Server listening port ${port}`);
});
