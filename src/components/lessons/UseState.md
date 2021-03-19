# useState

Components in React have a built-in state object. The state object is used to store property values that belong to a component. Once the state object is changed that component will re-render. State is often compared to props but they differ in that state is private and is controlled by the component. Unlike the state in class which is always an object, the state with Hooks can be an array, boolean, object or any other type. In order to use state you can write it as: import React, { useState } from 'react';

useState returns an array, the first element of this array is the state variable, the second element is the function used to update the value of the variable. Some important things to remember when using setState are the following: state cannot be modified directly, when updating state this may happen asynchronous for performance reasons and state updates are merged meaning the object you provide is merged into the current state.

# Some example code that uses useState is the following:

import React, { useState } from ‘react’;

const Counter = () => {

//Declaring a new state variable, we’ll call it “counter”

const [counter, setCounter] = useState(0);

}
