const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("static", {
	index: 'randomtext.txt'
}));

app.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
