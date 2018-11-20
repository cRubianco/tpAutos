const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cars', function(){
    mongoose.connection.db.dropDatabase();
     console.log("Base borrada");
     
})


db.cars.insertMany(
  [{
    "_id": "5bef43783b023028c8cbb3fc",
    "brand": "Ford",
    "model": "Kuga",
    "category": "D",
    "nroDoors": 4,
    "price": 1459200
  },
  {
    "_id": "5bef59816c0d9439bcaced28",
    "brand": "Ford",
    "model": "Ka",
    "category": "A",
    "nroDoors": 5,
    "price": 9800
  },
  {
    "_id": "5beff888449d4533445701d4",
    "brand": "Honda",
    "model": "HR-V",
    "category": "C",
    "nroDoors": 5,
    "price": 959800
  },
  {
    "_id": "5bf2cd2413683f3cfc26ba96",
    "brand": "Fiat",
    "model": "Uno",
    "category": "B",
    "nroDoors": 5,
    "price": 345800
  },
  {
    "_id": "5bf2fb7213683f3cfc26ba97",
    "brand": "Kia",
    "model": "Sorrento",
    "category": "C",
    "nroDoors": 4,
    "price": 897000
  },
  {
    "_id": "5bf2ffe3df1db61bf076672c",
    "brand": "Subaru",
    "model": "Impressa",
    "category": "D",
    "nroDoors": 3,
    "price": 2835690
  }
  ])
  
  // console.log("Base inicizalizada");
  

