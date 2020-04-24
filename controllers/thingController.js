const axios = require("axios");

const API_BASE_URL = "http://localhost:3000";

function list(req, res, next) {
    console.log("got here");
    // You could get this data from a database or whatever. I'm using
    // some JSON as a "database".
    axios
        .get(API_BASE_URL + "/api")
        .then(response => {
            console.log(response.data)
            res.render("things", response.data);
        })
        .catch(err => res.status(500).end("something broke"));
}

function detail(req, res, next) {
    const thingId = req.params?.id;
    axios
        .get(API_BASE_URL + "/api/" + thingId)
        .then(response => {
            console.log("data", response.data);
            res.render("thing", response.data);
        })
        .catch(err => res.status(500).end("something broke"));
}

module.exports = {
    list,
    detail,
};
