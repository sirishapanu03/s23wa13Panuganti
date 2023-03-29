var express = require('express');
var router = express.Router();


/* GET bonus computation */
router.get('/', function(req, res, next) {
        if(req.query.x === null || req.query.x == undefined){
          
          value1 = Math.random();
          value2 = Math.random();
          value3 = Math.round(Math.random() *100);
          console.log(value3)
          console.log(value1);

          let atan2 = Math.atan2(value1,value2);
          let atanh = Math.atanh(value1);
          let cbrt = Math.cbrt(value3);

          res.send(`atan2 applied to ${value1} and ${value2} is: ${atan2} 
                 <br> atanh applied to ${value1} is: ${atanh} 
                 <br> cbrt applied to ${value3} is: ${cbrt}`);
        }
        else{
          value1 = req.query.x
          value2 = req.query.x
          value3 = req.query.x
          let atan2 = Math.atan2(value1,value2);
          let atanh = Math.atanh(value1);
          let cbrt = Math.cbrt(value3);

          res.send(`atan2 applied to ${value1} and ${value2} is: ${atan2} 
                 <br> atanh applied to ${value1} is: ${atanh} 
                 <br> cbrt applied to ${value3} is: ${cbrt}`);

        }
      
});

module.exports = router;
