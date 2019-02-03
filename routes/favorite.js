let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the contact model
let favorite = require('../models/favorite');

/* GET contact list page - READ */
router.get('/', (req, res, next) => {
    favorite.find((err, favoriteList) => {
        
        if(err) {
            return console.error(err);
        }
        else {
            console.log(favoriteList);

            res.render('favorite/index',{
                title: "Favourite List",
                favoriteList:favoriteList


            });
            
        }
    })
});


module.exports = router;