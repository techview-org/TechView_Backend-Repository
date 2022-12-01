const { response } = require('express')
const Comments = require('../model/commentsModel.js')

const getAllCommentsForPost = async (request, response) => {
    postInfo = request.body
    let data = await Comments.grabCommentsFromDB(postInfo)
    return response.send(post.rows)
}

const createComment = async (request, response) => {
    let commentInfo = request.body
    const post = await Users.createAccountToDB(commentInfo.user_id, commentInfo.post_id, commentInfo.likes, commentInfo.comment)
    return response.send(post.rows)
}

module.exports = {
    getAllCommentsForPost,
    createComment
}
