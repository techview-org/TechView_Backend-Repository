const pool = require('../db.js')

class Users {
  static grabUsersFromDB () {
    return pool.query('SELECT * FROM users')
  }

  static grabLatestUserIdFromDB () {
    return pool.query('SELECT MAX(id) FROM users')
  }

  static grabUsersDataByEmailFromDB (userEmail) {
    console.log(userEmail)
    return pool.query('SELECT * FROM users WHERE user_id = $1', [userEmail])
  }

  static grabUserIdGivenUsernamFromDB (username) {
    return pool.query('SELECT id FROM users WHERE username = $1', [username])
  }

  static grabUsernameAndEmailFromDB (username) {
    return pool.query('SELECT username, email FROM users WHERE username = $1', [username])
  }

  static grabPasswordByEmailFromDB (username) {
    return pool.query('SELECT password FROM users WHERE email = $1', [username])
  }

  static grabBadgebyUsernameFromDB (username) {
    return pool.query('SELECT badged_id FROM users WHERE username = $1', [username])
  }

  static createAccountToDB (newUserId, username, email, password, badgedId) {
    return pool.query('INSERT INTO users (id, username, email, password, badged_id) VALUES ($1, $2, $3, $4, $5) RETURNING *', [newUserId, username, email, password, badgedId])
  }

  static updateBadgeOnDB (newBadge, username) {
    return pool.query('UPDATE users SET badged_id = $1 where username = $2', [newBadge, username])
  }
}

module.exports = Users
