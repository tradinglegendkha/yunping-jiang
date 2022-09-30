import React from 'react';
import {Navbar, Who, Blog, Header} from './components';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar/>
                <Header/>
            </div>
            <Who/>
        </div>
    )
}

export default App