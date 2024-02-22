const express = require('express')
const app = express()
const port = 3000
const mongoDB=require("./db")

mongoDB()
app.use((req,res,next)=>{
   res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
   res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept"
   )
   next()
})
app.use(express.json())
app.use('/api',require("./Routes/CreatUser"));
app.use('/api',require("./Routes/DisplayData"));


app.get('/', (req, res) => {
  res.send('loading...')
})



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

