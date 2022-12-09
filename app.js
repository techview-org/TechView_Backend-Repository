const express = require('express')
const app = express()
const cors = require('cors')
const port = 4005
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')
const commentsRouter = require('./routes/commentsRoutes')

app.use(express.json())
app.use(cors())

app.use(commentsRouter)
app.use(postRouter)
app.use(userRouter)

app.listen(port, () => {
  console.log(`listening at port: ${port}`)
})
