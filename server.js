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

/* SECTION: Server bind */
app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
});