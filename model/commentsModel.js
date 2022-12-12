const pool = require('../db.js')

class Comments {
  static grabLatestCommentIdFromDB () {
    return pool.query('SELECT MAX(comment_id) FROM comments')
  }

  static grabCommentsFromDB (postId) {
    return pool.query('SELECT users.username, comments.* FROM users, comments WHERE users.id = comments.user_id AND comments.post_id = $1', [postId])
  }

  static createCommentToDB (newCommentId, userId, postId, comment) {
    return pool.query('INSERT INTO comments (comment_id, user_id, post_id, likes, comment_description) VALUES ($1, $2, $3, $4, $5) RETURNING *', [newCommentId, userId, postId, 0, comment])
  }
}

module.exports = Comments
