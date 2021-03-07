import React from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ArrowFunction = () => {

    return (
        <>
            Traditionally, JavaScript function is writteng like this:
            <p>{'function(){ }'}</p>
            <p>Arrow function was introduced in es6. It allows for an easier way to write a function: </p>
            <p>{'() => { }'}</p>
            <p>For example, this function takes two arguments (numbers) and adds them together: </p>
            <p>{'const addTwoNumbers = function(a,b){ return a + b; }'}</p>
            <p>Equilvalently, the same function can be written using an arrow function notation as: </p>
            <p>{'const addTwoNumbers = (a,b) => { return a+b }'}</p>
            <p>Arrow functions can also be written in a single line without usint the 'return' keyword:</p>
            <p>{'const addNumShort = (a,b) => a+b'}</p>
        </>
    )
}

export default ArrowFunction;