const express = require("express")

require("dotenv").config()

const blogRouter = require("./routes/BlogRoutes")
const expenseRouter = require("./routes/ExpenseRoutes")
const dbConnect = require("./config/dbConnect")

const app = express()

//middleware
app.use(express.json())
app.use("/api/blogs", blogRouter)
app.use("/api/expense", expenseRouter)

async function main() {
  await dbConnect()
}

main()

app.listen(3001, () => {
  console.log("Server is running on port 3001")
})

module.exports = app
