const pool = require('../db.js');

class Users {
    static grabUsersFromDB() {
        console.log("hell")
        return pool.query('SELECT * FROM users')
    }

    static grabUsersDataByEmailFromDB(userEmail) {
        return pool.query('SELECT * FROM users WHERE email = $1', [userEmail])
    }

    static grabPasswordByEmailFromDB(username) {
        return pool.query('SELECT password FROM users WHERE email = $1', [username])
    }

    static grabBadgebyUsernameFromDB(username) {
        return pool.query('SELECT badged_id FROM users WHERE username = $1', [username])
    }

    static createAccountToDB(username, email, password) {
        return pool.query('INSERT INTO users (username, email, password, badged_id) VALUES ($1, $2, $3) RETURNING *')
    }

    static updateBadgeOnDB(newBadge, username) {
        return pool.query('UPDATE users SET badged_id = $1 where username = $2'[newBadge, username])
    }
}

module.exports = Users