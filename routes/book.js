var express = require("express");
const BookController = require("../controllers/BookController");

var router = express.Router();

router.get("/", BookController.bookList);
router.get("/:id", BookController.bookDetail);
router.post("/", BookController.bookStore);
router.put("/:id", BookController.bookUpdate);
router.delete("/:id", BookController.bookDelete);
router.get("/request/:id", BookController.getRequest);

module.exports = router;