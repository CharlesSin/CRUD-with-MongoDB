const ExpenseModel = require("../models/Expense")

exports.getAllExpenses = async () => {
  return await ExpenseModel.find()
}

exports.createExpense = async (blog) => {
  return await ExpenseModel.create(blog)
}
exports.getExpenseById = async (id) => {
  return await ExpenseModel.findById(id)
}

exports.updateExpense = async (id, blog) => {
  return await ExpenseModel.findByIdAndUpdate(id, blog)
}

exports.deleteExpense = async (id) => {
  return await ExpenseModel.findByIdAndDelete(id)
}
