//
// app.get('/users', async (req, res) => {...});
//
// Return all the users from the database:
//
const photoapp_db = require('./photoapp_db.js')
const { query_database } = require('./utility.js');

exports.get_users = async (req, res) => {

  console.log("**Call to get /users...");

  try {

    
    throw new Error("TODO: /users");

    //
    // MySQL in JS:
    //   https://expressjs.com/en/guide/database-integration.html#mysql
    //   https://github.com/mysqljs/mysql
    //
    

  }//try
  catch (err) {
    console.log("**Error in /users");
    console.log(err.message);
    
    res.status(500).json({
      "message": err.message,
      "data": []
    });
  }//catch

}//get
