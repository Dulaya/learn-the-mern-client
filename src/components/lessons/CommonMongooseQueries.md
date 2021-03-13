# Common Mongoose Queries

These are some queries that you will find yourself using often when working with Mongoose.

## Before you begin
Make sure your import your model into the file that you're going to be calling your queries in.
```
import MyModel from "./MyModel.js"
```

## Find
```
// find all documents
await MyModel.find({});

// find all documents named john and at least 18
await MyModel.find({ name: 'john', age: { $gte: 18 } }).exec();

// executes, passing results to callback
MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});

// executes, name LIKE john and only selecting the "name" and "friends" fields
await MyModel.find({ name: /john/i }, 'name friends').exec();

// passing options
await MyModel.find({ name: /john/i }, null, { skip: 10 }).exec();
```

## Find by ID
```
// Find the adventure with the given `id`, or `null` if not found
await Adventure.findById(id).exec();

// using callback
Adventure.findById(id, function (err, adventure) {});

// select only the adventures name and length
await Adventure.findById(id, 'name length').exec();
```

## Find by One
```
// Find one adventure whose `country` is 'Croatia', otherwise `null`
await Adventure.findOne({ country: 'Croatia' }).exec();

// using callback
Adventure.findOne({ country: 'Croatia' }, function (err, adventure) {});

// select only the adventures name and length
await Adventure.findOne({ country: 'Croatia' }, 'name length').exec();
```

## Update
```
// Update all documents with the name "Tobi".
const res = await MyModel.update({ name: 'Tobi' }, { ferret: true });
```

## Update One 
```
// Finds a the first document with the id "123456789" and updates its name.
Model.findOneAndUpdate({id: 123456789}, { name: 'jason bourne' }, options, callback)
```

## Update Many
```
// Update all documents in the `mymodels` collection
await MyModel.updateMany({}, { $set: { name: 'foo' } });
```
