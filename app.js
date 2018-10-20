const app = require('express')()
const routes = require('./api/routes')(app)

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server started on port: ${port}`)
});