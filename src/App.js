import React from 'react';
import {Navbar, Ministate, Who, Header, Current, Studreviews, Awards} from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient-bg">
                <Navbar/>
                <Header/>
            </div>
            <Ministate/>
            <Who/>
            <Current/>
            <Studreviews/>
            <Awards/>
        </div>
    )
}

export default App