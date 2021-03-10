import React from 'react';

const TryCatch = () => {

    return (
        <>
            <h1>Try Catch</h1>
            <p>The try...catch statement is a block of statement to try and identify the error or exception to be thrown.</p>
            <p>The <b>try</b> statement lets you test a block of code for errors.</p>
            <p>The <b>catch</b> statement lets you handle the error.</p>
            <p>The <b>throw</b> statement lets you create custom errors.</p>
            <p>The <b>finally</b> statement lets you execute code, after try and catch, regardless of the result.</p>
            <p>Example of the code:</p>
            <p>The <b>try</b> is the block when you want to try your function or code: </p>
            <p>try testingfunction()</p>
            <p>The <b>catch</b> block is where you handle the error: </p>
            <p>catch(err) {'{ }'} </p>
            <p>The <b>finally</b> block will executed regardless the result of the try/catch:  </p>
            <p>finally {'{ }'}</p>
        </>
    )
}

export default TryCatch;