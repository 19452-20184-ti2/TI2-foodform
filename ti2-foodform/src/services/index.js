import postService from "./post.js";
import commentService from "./comment.js";
import likeService from "./like.js";
import authService from "./auth.js";
import userService from "./user.js"

export default {
    post: postService,
    comment: commentService,
    like: likeService,
    auth: authService,
    user: userService
}