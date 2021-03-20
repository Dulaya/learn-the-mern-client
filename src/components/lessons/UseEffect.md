# useEffect

useEffect is a hook that manages side effects in functional components. When using useEffect the component will do something after render. useEffect takes in two arguments, a function and an array, the function will be called after the DOM updates. The function is only executed if the array values have changed. Usually effects are performed after the DOM has finished updating. If it's compared to class syntax, useEffect is like componentDidMount, componentDidUpdate and componentWillUnmount. This hook makes it possible for functional components to have access to the component lifecycle. Some examples of useEffect are DOM manipulation, fetching data and setting up a subscription.

##### Some example code that uses useEffect is the following:

&nbsp;

```
import React, { useState, useEffect } from 'react';

const Counter = () => {

    const [counter, setCounter] = useState(0);

    useEffect( () => {

    console.log(`Count is {counter}`)

    }, []);

    return (
        <> 
            {counter} 
        </>
    );
}
```