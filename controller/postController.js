const Post = require('../model/postModel.js')
const Users = require('../model/userModel')

const getPost = async (request, response) => {
    let data = await Post.grabPostFromDB()
    response.send(data.rows)
}

const addPost = async (request, response) => {
    let postInfo = request.body
    const latestPostId = await Post.grabLatestPostIdFromDB()
    const newPostId = await latestPostId.rows[0].max + 1
    const post = await Post.addPostToDB(newPostId, postInfo.user_id, postInfo.comment_id, postInfo.post_description)

    response.send(post)
}

module.exports = {
    getPost,
    addPost
}