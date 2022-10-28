const mongoose = require("mongoose")
const Schema = mongoose.Schema

const expenseSchema = new Schema({
  category: String,
  date: String,
  id: String,
  item: String,
  pay: String,
  price: String,
  timestamp: Number,
  type: String,
})

module.exports = mongoose.model("Expense", expenseSchema)
