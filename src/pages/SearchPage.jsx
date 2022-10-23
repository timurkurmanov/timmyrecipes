import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom"
import axios from "axios";
import s from "./SearchPage.module.css"
import RecipyItem from "../components/RecipyItem";
import {useNavigate} from "react-router-dom";

function SearchPage() {
    const [searched, setSearched] = useState([])
    let params = useParams()
    const navigate = useNavigate()
    const getSearched = async (name) => {
        const options = {
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v2/9973533/search.php?s=${name}`,
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setSearched(response.data.meals)
        }).catch(function (error) {
            console.error(error);

        });
    }
    useEffect(() => {
        getSearched(params.search)
    }, [params.search]);
    console.log(searched)
    return (
        <div className={s.SearchPageWrapper}>
            <div className={s.SearchPageItemsBlock}>
                {searched === null ? navigate('/notfound') : searched.map((category) => {
                    return (
                        <Link to={'/recipypage/' + category.idMeal}>
                            <RecipyItem image={category.strMealThumb}
                                        title={category.strMeal}/>
                        </Link>
                    )
                })}
            </div>
        </div>
    );
}

export default SearchPage;
