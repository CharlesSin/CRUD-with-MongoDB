const express = require("express")

const { getAllExpenses, createExpense, getExpenseById, updateExpense, deleteExpense } = require("../controllers/ExpenseController")

const router = express.Router()

router.route("/").get(getAllExpenses).post(createExpense)
router.route("/:id").get(getExpenseById).put(updateExpense).delete(deleteExpense)

module.exports = router
