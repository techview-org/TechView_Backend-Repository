const pool = require('../db.js');

class Comments {
    static grabCommentsFromDB(post_id) {
        return pool.query('SELECT * FROM comments')
    }

    static createCommentToDB(user_id, post_id, likes, comment){
        return pool.query('INSERT INTO commets (user_id, post_id, likes, comment) VALUE ($1, $2, $3, $4) RETURNING *', [user_id, post_id, likes, comment])
    }
}


module.exports = Comments