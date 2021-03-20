# Arrow Function

Traditionally, JavaScript function is writteng like this:

`function(){ }`

Arrow function was introduced in es6. It allows for an easier way to write a function:

`() => { }`

For example, this function takes two arguments (numbers) and adds them together: 

```
const addTwoNumbers = function(a,b){ 
    return a + b; 
    }
```

Equilvalently, the same function can be written using an arrow function notation as: 

```
const addTwoNumbers = (a,b) => { 
    return a+b; 
    }
```

Arrow functions can also be written in a single line without usint the 'return' keyword:

`const addNumShort = (a,b) => a+b;`
