const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const monngoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors())

//import routes
const postRoutes = require('./routes/post')

app.use('/post', postRoutes)

app.get('/', (req, res) => {
    res.send('Hello World wow!')
})

mongoose.connect(process.env.DB_CONNECTION,{
    useNewUrlParser : true,
    useUnifiedTopology: true
})
let db = mongoose.connection

//handler error
db.on('error', console.error.bind(console, 'Error Estabilishing a Database Connection?'))

//handler success
db.once('open',() => {
    console.log('Database is connected')
}) 

app.listen(process.env.PORT, () => {
    console.log(`Server runnning on port ${process.env.PORT}`)
})