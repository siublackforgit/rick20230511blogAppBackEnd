import express, { json } from "express"
import postRoutes from "./routes/post.js"
const app = express()

app.use(express.json())
app.use("/api/post",postRoutes)


app.listen(8800,()=>{
    console.log('Server is running')
})
