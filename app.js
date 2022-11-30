//Requires
const express = require('express');
const cors = require('cors')
const userRouter = require('./routes/userRoutes')

//Server 
const app = express();
const PORT = process.env.PORT || 4000; // Or whichever port you choose for your local server

//Middle Ware
app.use(cors())
app.use(express.json())
app.use(userRouter)

//Server Routes
// app.use('/projects', projectsRouter)
// app.use('/bugs', bugsRouter)
// app.use('/users', usersRouter)

//Listening
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})