Project uploaded in:

https://github.com/Aleix11/test_backend

To run the app execute the following command:

node app.js

The project is structured in the following way:

- The main script is app.js.

- There is a Routes folder that contains 2 files:
    > polices.js: Routes for policies requests.
    > users.js: Routes for users requests.

- There is a Controllers folder that contains 3 files:
    > polices.js: Functions that executes policies requests.
    > users.js: Functions that executes users requests.
    > middleware.js: Functions that are executed just when the request arrives.
                     These functions check if users are admin or user.


FUTURE ACTIONS:

- The next step for the search functions is to use Regex.

- To implement a Database, we can implement, for example, a MongoDB.

We can install MongoDB and run the database locally using the following command:

mongod

To configure a Mongo database, we can put the following code in app.js.

mongoose.connect("mongodb://localhost:27017/AAA",{
        useNewUrlParser: true,
        reconnectTries : Number.MAX_VALUE,
        autoReconnect : true,
        reconnectInterval: 500
});
// When successfully connected
mongoose.connection.on('connected', () => {
    console.log('dbevent: open');
});
// When successfully reconnected
mongoose.connection.on('reconnected', () => {
    console.log('dbevent: reconnected');
});
// If the connection throws an error
mongoose.connection.on('error', (err) => {
    console.log(`dbevent: error: ${err}`);
});
// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
    console.log('dbevent: disconnected');
    mongoose.connect("mongodb://localhost:27017/AAA",{
        useNewUrlParser: true,
        reconnectTries : Number.MAX_VALUE,
        autoReconnect : true,
        reconnectInterval: 500
    });
});

Also we can create a Policies and Users Model Schema to save data in the database.