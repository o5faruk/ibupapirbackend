const app = require('express')()
const routes = require('./routes')(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});