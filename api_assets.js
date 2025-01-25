//
// app.get('/assets', async (req, res) => {...});
//
// Return all the assets from the database:
//
const photoapp_db = require('./photoapp_db.js')
const { query_database } = require('./utility.js');

exports.get_assets = async (req, res) => {

  console.log("**Call to get /assets...");

  try {

    
    throw new Error("TODO: /assets");

    //
    // MySQL in JS:
    //   https://expressjs.com/en/guide/database-integration.html#mysql
    //   https://github.com/mysqljs/mysql
    //
    

  }//try
  catch (err) {
    console.log("**Error in /assets");
    console.log(err.message);
    
    res.status(500).json({
      "message": err.message,
      "data": []
    });
  }//catch

}//get
