// 1. Importaciones
const express =require("express")
const router = express.Router()

const bookController = require("./../controllers/bookController")

// 2. Ruteo
router.post("/create", bookController.create)
router.get("/readAll", bookController.readAll)
router.get("/readone/:id", bookController.readOne)
router.put("/edit/:id", bookController.edit)
router.delete("/delete/:id", bookController.delete)


// 3. Exportaciones
module.exports = router