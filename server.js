/* beginning notes:
    - Data representation:
        {
            title: "String",
            price: 10,
            image: "String URL"
        } ... { id: Generate }

    - Tech Stack:
        1) Node: Runtime Env
        2) NPM: Package manager
        3) Express: Server framework
        4) ~~~ Mongoose: DB ~~~
    
    - dependences:
        Express, ejs, method-override
*/

/* SECTION: External modules */
const express = require("express");


/* SECTION: Internal modules */

/* SECTION: Instanced module */
const app = express();

/* SECTION: Server configuration */
const PORT = 4000;

/* SECTION: Middleware */



/* SECTION: Routes */
app.get('/', (req, res) => {
    res.redirect('/store');
});

/* NOTE: Index GET /store - Presentational */
app.get('/store', (req, res) => {
    res.send('Welcome to the store');
});

/* NOTE: New GET /store/new - Presentational form */
app.get('/store/new', (req, res) => {
    res.send('Here to make a new store item?');
});

/* NOTE: Create POST /store - Functional */

/* NOTE: Show GET /store/:id - Presentational */
app.get('/store/:id', (req, res) => {
    res.send(`Showing data for item w/ id: ${req.params.id}`);
});

/* NOTE: Edit GET /store/:id/edit - Presentational form */
app.get(`/store/:id/edit`, (req, res) => {
    res.send(`Are you here to edit store item w/ id: ${req.params.id}?`);
});

/* NOTE: Update PUT /store/:id - Functional */

/* NOTE: Destroy DELETE /store/:id - Functional */

// 404 Page



/* SECTION: Server bind */
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});