const express = require('express');
const mongoose = require('mongoose');
const book = require('../models/booking.js');

const uri =
  'mongodb+srv://pokemonfanshravan:pokemon@cluster0.4brsf15.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/api/bookings", function(req, res){
    const data = req.params;
    console.log(data);
})

app.listen(3000, function(){
    console.log("running on port 3000");
} )