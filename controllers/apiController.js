const faker = require("faker");
const { sample } = require("lodash");

// Make a fake API
const NUM_THINGS = 20;
const things = [];
const pictureTypes = [
    "abstract",
    "animals",
    "business",
    "cats",
    "food",
    "transport",
];
for (let i = 0; i < NUM_THINGS; i++) {
    const newThing = {
        id: i + 1,
        color: faker.fake("{{commerce.color}}"),
        product: faker.fake("{{commerce.product}}"),
        price: faker.fake("{{commerce.price}}"),
        description: faker.fake("{{hacker.phrase}}"),
        picture: faker.fake(`{{image.${sample(pictureTypes)}}}`),
    };
    things.push(newThing);
}

// localhost:3000/api
function list(req, res, next) {
    res.json(things);
}

// localhost:3000/api/12
function detail(req, res, next) {
    const thingId = req.params.id;
    res.json(things[thingId - 1]);
}

module.exports = {
    list,
    detail,
};
