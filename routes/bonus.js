var express = require('express');
var router = express.Router();


/* GET bonus compute */
router.get('/', function(req, res, next) {
  randomValue = Math.random();
  randomValue2 = Math.random();
  console.log(randomValue);

 let atan2 = Math.atan2(randomValue,randomValue2);
 let atanh = Math.atanh(randomValue);
 let cbrt = Math.cbrt(randomValue);

   res.send(`atan2 applied to ${randomValue} and ${randomValue2} is: ${atan2} 
   <br> atanh applied to ${randomValue} is: ${atanh} 
   <br> cbrt applied to ${randomValue} is: ${cbrt}`);
});

module.exports = router;
