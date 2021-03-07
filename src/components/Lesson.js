import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import ArrowFunction from './lessons/ArrowFunction';

const Lesson = () => {

    return (
        <>
            <Route exact path='/arrow-function'>
                <ArrowFunction />
            </Route>
        </>
    )
}

export default Lesson;