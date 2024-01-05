const express = require('express');
// const {test} = require('../controllers/user.controller')
const router = express.Router();

router.get('/test',(req, res) => {
    res.json({
      message: 'Api route is working!',
    });
})

// export default router;
module.exports=router;