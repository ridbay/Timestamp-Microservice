const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = module.exports = express();
app.use(bodyParser.json())
app.use(cors())

app.get('/:dateVal', function (req, res, next) {
    var dateVal = req.params.dateVal;
    var dateFormat = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }

    if (isNaN(dateVal)) {
        var naturalDate = new Date(dateVal)
        naturalDate = naturalDate.toLocaleDateString('en-us', dateFormat);
        var unixDate = new Date(dateVal).getTime() / 1000;
    } else {
        var unixDate = dateVal;
        var naturalDate = new Date(dateVal * 1000)
    }

    res.json({ unix: unixDate, natural: naturalDate });
})

app.listen(process.env.PORT || 3000, () => console.log("Listening to Port process.env.PORT || 3000"));