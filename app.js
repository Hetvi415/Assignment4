const express = require('express')
const app = express()
const port = 3000

const company = require("./routes/cmp.js");
const product= require("./routes/product.js");
const seller = require("./routes/seller.js");

app.use("/cmp",company);
app.use("/product",product);

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
