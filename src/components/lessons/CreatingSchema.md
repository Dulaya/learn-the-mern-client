# Creating Schema

---

## Defining your Schema
Everything in Mongoose starts with a Schema. Each schema maps to a MongoDB collection and defines the shape of the documents within that collection. Here is an example of what a schema for a blog post might look like:

``` 
import mongoose from 'mongoose';
  const { Schema } = mongoose;

  const blogPost = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });

export default mongoose.model("blogPost", blogPost);
```
## Defining Mongoose and Initializing the Schema
Every schema starts by importing mongoose and creating an instance of the Schema constructor. 

```
import mongoose from 'mongoose';
const { Schema } = mongoose;
```

## Defining Attributes
Now we can use the instance of Schema to define our Mongoose schema.

```
const blogPost = new Schema({
    title:  String, // String is shorthand for {type: String}
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,
    meta: {
      votes: Number,
      favs:  Number
    }
  });
  ```

  Observe the above code. You can see there are several attributes – title, author, body, comments, date, hidden, and meta. The title, author and body attributes are of type String, the comments attribute is of an Array of an Object with two types, the date and meta attributes are each a different Object with two types, and the hidden attribute is of type Boolean.

#### Allowed Types  

1. String
2. Number
3. Date
4. Mixed
5. Boolean
6. ObjectId
7. Buffer
8. Array
9. Decimal128
10. Map

## Exporting the Schema

Finally we export the schema so that we can access it from the rest of our project. 
```
export default mongoose.model("blogPost", blogPost);
```