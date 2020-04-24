const axios = require("axios");

const API_BASE_URL = "http://localhost:3000";

function list(req, res, next) {
    console.log("got here");
    // You could get this data from a database or whatever. I'm using
    // some JSON as a "database".
    axios
        .get(API_BASE_URL + "/api")
        .then(response => {
            console.log(response.data);
            const things = response.data.map(createThing);
            res.render("things", { title: "Things List", things: things });
        })
        .catch(err => res.status(500).end("something broke"));
}

function detail(req, res, next) {
    const thingId = req.params.id;
    axios
        .get(API_BASE_URL + "/api/" + thingId)
        .then(response => {
            console.log("data", response.data);
            const t = response.data;
            const thing = createThing(t);
            console.log(thing);
            res.render("thing", { title: thing.product, thing: thing });
        })
        .catch(err => res.status(500).end("something broke"));
}

// Add a new field called `colorname` that doesn't have spaces in it (for the CSS)
function createThing(thing) {
    return { colorname: thing.color.replace(/ /g, ""), ...thing };
}

module.exports = {
    list,
    detail,
};
