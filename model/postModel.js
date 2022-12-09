const pool = require('../db.js')

class Post {
  static grabPostFromDB () {
    return pool.query('SELECT users.username, post.*FROM users, post WHERE post.user_id = users.id')
  }

  static grabLatestPostIdFromDB () {
    return pool.query('SELECT MAX(post_id) FROM post')
  }

  static addPostToDB (newPostId, user_id, post_description) {
    return pool.query('INSERT INTO post (post_id, user_id, post_description) VALUES ($1, $2, $3) RETURNING *', [newPostId, user_id, post_description])
  }
}

module.exports = Post
