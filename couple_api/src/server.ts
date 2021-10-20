import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import routes from './routes/index'
import swaggerUi from 'swagger-ui-express'
import morgan from 'morgan'

require('dotenv').config()

const app = express()

const port = process.env.PORT || 5000
const uri: string = process.env.ATLAS_URI || ''

app.use(cors())
app.use(express.json())

app.use(morgan('tiny'))
app.use(express.static('public'))

//swagger
app.use(
    '/swagger',
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: '/swagger.json',
        },
    }),
)

//router
app.use('/api/v1', routes)

mongoose.connect(uri)
const connection = mongoose.connection
connection.once('open', () => {
    console.log('MongoDB database connection established successfully')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})
