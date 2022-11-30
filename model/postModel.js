const pool = require('../db.js');

class Post {
    static grabPostFromDB() {
        return pool.query('SELECT * FROM post')
    }

    static addPostToDB(user_id, comment_id, post_title, post_description, post_times) {
        return pool.query('INSERT INTO post (user_id, comment_id, post_title, post_description, post_times) VALUES ($1, $2, $3, $4, $5) RETURNING *')
    } 
}

module.exports = Post