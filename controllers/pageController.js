// Logic for the page routes
function homePage(req, res, next) {
    const data = {
        title: "Home Page",
        body: `
        <p>This is from the database or wherever.</p>
    `,
    };
    res.render("page", data);
}

function aboutPage(req, res, next) {
    const data = {
        title: "About Page",
        body: `
        <p>This is the about page.</p>
    `,
    };
    res.render("page", data);
}

function contactPage(req, res, next) {
    const data = {
        title: "Home Page",
        body: `
        <p>Contact us: 1234@example_site.com</p>
    `,
    };
    res.render("page", data);
}

module.exports = {
    homePage,
    aboutPage,
    contactPage,
};
