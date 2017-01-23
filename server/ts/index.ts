import * as cors from 'cors'
import * as express from 'express'

import config from './config'
import routes from './routes'

const app = express()
const router = express.Router()

// This enables CORS for all our routes
app.use(cors())
app.listen(config.port)

app.use('/api', routes(router))

console.log(`Server running on http:127.0.0.1:${config.port}`)
