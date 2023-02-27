const db = require('../config/database.js')

//User 
const User = function(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.gender = user.gender;
    this.cellphoneNumber = user.cellphoneNumber;
    this.emailAdd = user.emailAdd;
    this.userPass = user.userPass;
    this.userRole = user.userRole;
    this.userProfile = user.userProfile;
    this.joinDate = user.joinDate;
};

User.create = (newUser, result) => {
    db.query('INSERT INTO Users ?', newUser, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }
        console.log('You created a User.');
        result(null, newUser);
    });
};

User.findById = (id, result) => {
    db.query(`Select * From Users Where id = ? `, [id], (err, res) =>{
        if(err) {
            console.log('error:', err);
            result(err, null);
            return;
        }
        if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
          }
          result ({kind: 'not found'}, null);
    });
};

User.findAll = (firstName, result) => {
    db.query( `SELECT * FROM Users WHERE firstName LIKE ?`, [firstName], (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Users: ", res);
      result(null, res);
    });
  };

  User.updateById = (id, user, result) => {
    db.query('UPDATE Users SET firstName = ?, lastName = ?, gender = ?, cellphoneNumber = ?, emailAdd = ?, userPass = ?, userRole = ?, userProfile = ?, joinDate = ? WHERE ID = ?', [firstName, lastName, gender, cellphoneNumber, emailAdd, userPass, userRole, userProfile, joinDate], (err, res) => {
        if(err) {
            console.log('error', err);
            result(null, err);
            return;
        }
        if(res.affectedRows == 0) {
            result ({kind: 'not_found'}, null);
            return;
        }
        console.log('You updated the tutorial');
        result(null, {id, ...user});
    } )
  }

  User.remove = (id, result) => {
    db.query('Delete From Users Where id = ?', id, (err, res) => {
        if(err) {
            console.log('error:', err);
            result(null, err);
            return
        }
        if(res.affectedRows == 0 ) {
            result({kind: 'not_found',}, null);
            return;
        }
        console.log('You just deleted a User', id);
        result(null, res);
    })
  }
