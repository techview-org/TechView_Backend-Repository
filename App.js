const express = require('express');
// const bcrypt = require('bcrypt')
const app = express();
const port = 4005; 
const cors = require('cors');
const userRouter = require('./routes/userRoutes')
const postRouter = require('./routes/postRoutes')



// middleware
app.use(express.json());
app.use(cors());

app.use(userRouter)
app.use(postRouter)





app.listen(port, () => {
    console.log(`listening at port: ${port}`)
})