// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to Mongo Server');
    }
    console.log('Connected to Mongo Server');

    // find one and update

        db.collection('Todos').findOneAndUpdate(
            {
                text: 'work'
            }, {
               $set: {
                   completed: false
               } 
            }, {
                returnOriginal: false
            }       
        ).then((result) => {
                console.log(result);
        });

    // db.close();
});