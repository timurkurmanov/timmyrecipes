import React, {useEffect, useState} from 'react';
import s from "./Search.module.css"
import {IoIosSearch} from "react-icons/io";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import RecipyItem from "./RecipyItem";

function Search() {
    const [input, setInput] = useState("")
    const navigate = useNavigate()
    const submitHandler = (e) => {
        e.preventDefault();
        navigate('searched/' + input)
    }


    return (
        <div className={s.SearchWrapper}>
            <div className={s.SearchItem}>
                <form onSubmit={submitHandler}>
                    <span><IoIosSearch/></span>
                    <input onChange={(e) => {
                        setInput(e.target.value)
                    }} type="text" value={input}/>
                </form>
            </div>
        </div>
    );
}

export default Search;
