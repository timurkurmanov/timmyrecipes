import React from 'react';
import HomePage from "./HomePage";
import Category from "../components/Category";
import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import FoodCategory from "./FoodCategory";
import SearchPage from "./SearchPage";
import NotFound from "./NotFound";
import RecipyPage from "./RecipyPage";
import {AnimatePresence} from "framer-motion";

function Pages() {
    const location = useLocation()
    return (
        <AnimatePresence exitBeforeEnter>
            <div>
                <Routes Location={location} key={location.pathname}>
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/category/:type"} element={<FoodCategory/>}/>
                    <Route path={"/searched/:search"} element={<SearchPage/>}/>
                    <Route path={"/notfound"} element={<NotFound/>}/>
                    <Route path={"/recipypage/:name"} element={<RecipyPage/>}/>
                </Routes>
            </div>
        </AnimatePresence>
    );
}

export default Pages;
