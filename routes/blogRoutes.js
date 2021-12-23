const express = require('express');
const blogRouter = express.Router();
const blogController = require('../controller/blogController');

blogRouter.get('/', blogController.blog_index);

blogRouter.post('/', blogController.blog_create_post);

blogRouter.get('/create', blogController.blog_create_get);

blogRouter.get('/:id', blogController.blog_details);

blogRouter.delete('/:id', blogController.blog_delete);


module.exports= blogRouter;