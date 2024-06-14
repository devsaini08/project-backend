import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

// cross origion resorce sharing
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "20kb" }))
app.use(express.urlencoded({ extended: true, limit:"20kb" }))
app.use(express.static("public"))

// cookieParser is use for acees the user browser cookie and set (curd opration)
app.use(cookieParser())





export default app