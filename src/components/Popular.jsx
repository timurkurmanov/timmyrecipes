import React, {useEffect, useState} from 'react';
import RecipyItem from "./RecipyItem";
import axios from 'axios';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import s from "./Popular.module.css"
import {Link} from "react-router-dom";
function Popular() {
    const [popular, setPopular] = useState([]);
    useEffect(() => {
        getPopular();
    }, [])
    const getPopular = async () => {

        const options = {
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v2/9973533/randomselection.php',
        };

        axios.request(options).then(function (response) {
            setPopular(response.data.meals)
        }).catch(function (error) {
            console.error(error);
        });

    }

    return (

        <div className={s.PopularWrapper}>

            <div className={s.PopularHeader}><h3>Popular</h3></div>
            <Splide options={{
                perPage: 3,
                arrows: false,
                pagination: false,
                drag: "free"
            }}>
                {popular.map((recipe) => {
                    console.log()
                    return (
                        <SplideSlide>
                            <Link to={'/recipypage/'+recipe.idMeal}>
                                <RecipyItem title={recipe.strMeal} image={recipe.strMealThumb}/>
                            </Link>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    );
}

export default Popular;
