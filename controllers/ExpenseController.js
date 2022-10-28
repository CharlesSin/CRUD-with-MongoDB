const expenseService = require("../services/ExpenseService")

exports.getAllExpenses = async (req, res) => {
  try {
    const blogs = await expenseService.getAllExpenses()
    res.json({ data: blogs, status: "success" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.createExpense = async (req, res) => {
  try {
    const { obj } = req.body
    const blog = await expenseService.createExpense(obj)
    res.json({ data: blog, status: "success" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.getExpenseById = async (req, res) => {
  try {
    const blog = await expenseService.getExpenseById(req.params.id)
    res.json({ data: blog, status: "success" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.updateExpense = async (req, res) => {
  try {
    const blog = await expenseService.updateExpense(req.params.id, req.body)
    res.json({ data: blog, status: "success" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}

exports.deleteExpense = async (req, res) => {
  try {
    const blog = await expenseService.deleteExpense(req.params.id)
    res.json({ data: blog, status: "success" })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
