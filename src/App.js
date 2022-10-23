import React from 'react';
import Pages from "./pages/Pages";
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom";
import Search from "./components/Search";
import Logo from "./components/Logo";

function App() {
    return (

        <BrowserRouter>
                <div className="App">
                    <Logo/>
                    <Search/>
                    <Category/>
                    <Pages/>
                </div>
        </BrowserRouter>

    );
}

export default App;
