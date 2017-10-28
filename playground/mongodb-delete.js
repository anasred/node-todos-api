// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect to Mongo Server');
    }
    console.log('Connected to Mongo Server');

    // delete many
        // db.collection('Todos').deleteMany({text: 'eat'}).then((result) => {
        //     console.log(result);
        // });
    // delete one
        // db.collection('Todos').deleteOne({text: 'eat'}).then((result) => {
        //     console.log(result);
        // });
    // find one and delete
        db.collection('Todos').findOneAndDelete({text: 'eat'}).then((result) => {
            console.log(result);
        });
    // db.close();
});