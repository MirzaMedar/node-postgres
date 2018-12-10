var express = require('express');
var router = express.Router();
var db = require('./../db/dbConfig');

/* GET users listing. */
router.get('/', function(req, res, next) {
    db.query('SELECT * FROM "Students" ',[],(err, result) => {
        if (err) {
            return next(err)
        }
        res.send(result.rows);
    })
});

router.post('/',(req,res)=>{
   var newStudent = req.body;
   db.query(' SELECT * FROM Students_AddStudent($1,$2) ', [newStudent.FirstName,newStudent.LastName], (err,result)=>{
       if (err) {
           res.send(err);
       }
       res.send('New record inserted successfully!!');
   });
});

module.exports = router;
