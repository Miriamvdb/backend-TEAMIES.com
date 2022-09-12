const { Router } = require("express");
const Category = require("../models").category;
const router = new Router();

// F7: http GET :4000/categories
router.get("/", async (req, res, next) => {
  try {
    const allCategories = await Category.findAll();
    res.send(allCategories);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
