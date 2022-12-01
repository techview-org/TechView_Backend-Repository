const Post = require('../model/postModel.js')
const Users = require('../model/userModel')

const getPost = async (request, response) => {
    let data = await Post.grabPostFromDB()
    response.send(data.rows)
}

const addPost = async (request, response) => {
    let postInfo = requset.body
    const post = await Post.addPostToDB(postInfo.user_id, postInfo.comment_id, postInfo.post_title, postInfo.post_description, postInfo.post_times)
}

module.exports = {
    getPost,
    addPost
}