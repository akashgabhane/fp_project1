const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const blogController = require("../controllers/blogController")
const middleware = require("../middleware/middleware")

router.post("/author", authorController.createAuthor)

router.post("/blog", middleware.authentication, blogController.createblog)
router.get("/blogs", middleware.authentication, blogController.getdata)
router.put("/blogs/:blogId", middleware.authentication, middleware.authorisation, blogController.updateBlog)
router.delete("/blogs/:blogId", middleware.authentication, middleware.authorisation, blogController.deletedata)
router.delete("/blogs", middleware.authentication, middleware.authorisation, blogController.queryDeleted)

router.post("/login", blogController.loginUser)

module.exports = router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JJZCI6IjYyNjgyNThhYmIzOTRmNzRhNzExYTY0MiIsIlByb2plY3QiOiJibG9nZ2luZ1NpdGUiLCJpYXQiOjE2NTE0NTcwOTF9.GGdKREBH51QqsU97rUIJftWJSz9eBej8ZB01sAVaK0Y