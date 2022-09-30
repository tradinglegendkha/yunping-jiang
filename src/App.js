import React from 'react';
import {Navbar, Who, Blog, Header, Current, Studreviews, Awards} from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Who/>
            <Blog/>
            <Current/>
            <Studreviews/>
            <Awards/>
        </div>
    )
}

export default App