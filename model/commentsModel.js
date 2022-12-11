const pool = require('../db.js')

class Comments {
  static grabLatestCommentIdFromDB () {
    return pool.query('SELECT MAX(comment_id) FROM comments')
  }

  static grabCommentsFromDB (post_id) {
    return pool.query('SELECT * FROM comments WHERE post_id = $1', [post_id])
  }

  static createCommentToDB (newCommentId, user_id, post_id, comment) {
    return pool.query('INSERT INTO comments (comment_id, user_id, post_id, likes, comment_description) VALUES ($1, $2, $3, $4, $5) RETURNING *', [newCommentId, user_id, post_id, 0, comment])
  }
}

module.exports = Comments
