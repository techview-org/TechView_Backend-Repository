const { pathToFileURL } = require('url');
const pool = require('../db.js');

class Comments {
    static grabComments() {
        return pool.query('SELECT * FROM comments JOIN post on comments.post_id = post.post_id')
    }

    static createComment(){
        
    }
}