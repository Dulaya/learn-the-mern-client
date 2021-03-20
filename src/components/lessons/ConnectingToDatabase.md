# Connecting To Database
---
## Mongoose
To connect to our MongoDB database, we are going to use [**Mongoose**](https://mongoosejs.com/docs/). Mongoose is an object document modeling (ODM) layer that is built on top of NodeJS's MongoDB package. If you're coming from SQL, it's similar to an ORM for a relational database.

## Installation
To install Mongoose, run this command in your project directory: 
```
npm install mongoose --save
```

## Add connection string to .env
Now that we have Mongoose installed, let's connect to the database! We have two options when choosing to create our database. We can either choose to create a local instance of our MongoDB database or we can use the [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) website to host our database remotely. 

Inside your **.env** file we are going to put in a connection string called **DB_CONNECTION_STRING**. 

Your **.env** entry should look something like this if you are hosting MongoDB locally: 

```
DB_CONNECTION_STRING="mongodb://localhost/test"
```

Or like this if you are using [MongoDB Atlas](https://www.mongodb.com/cloud/atlas):

```
DB_CONNECTION_STRING="mongodb+srv://USERNAME:PASSWORD@cluster0.u6ntd.mongodb.net/DATABASENAME?retryWrites=true&w=majority"
```

## Connect to the Database

Finally, we can connect to the database using our MongoDB connection string.

```
import mongoose from "mongoose"

mongoose.connect(process.env.DB_CONNECTION_STRING, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
})
```

