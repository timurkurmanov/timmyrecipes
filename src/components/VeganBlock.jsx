import React, {useEffect, useState} from 'react';
import RecipyItem from "./RecipyItem";
import axios from 'axios';
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import s from "./VeganBlock.module.css"
import {Link} from "react-router-dom";

function VeganBlock() {
    const [veggie, setVeggie] = useState([]);
    useEffect(() => {
        getPopular();
    }, [])
    const getPopular = async () => {

        const options = {
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian',
        };

        axios.request(options).then(function (response) {
            setVeggie(response.data.meals)
        }).catch(function (error) {
            console.error(error);
        });

    }

    return (

        <div className={s.VeganWrapper}>

            <div className={s.VeganHeader}><span><h3>Vegan picks</h3></span></div>
            <Splide options={{
                perPage: 4,
                arrows: false,
                pagination: false,
                drag: "free"
            }}>
                {veggie.map((recipe) => {
                    console.log()
                    return (
                        <SplideSlide>
                            <Link to={'/recipypage/' + recipe.idMeal}>
                                <RecipyItem title={recipe.strMeal} image={recipe.strMealThumb}/>
                            </Link>
                        </SplideSlide>
                    )
                })}
            </Splide>
        </div>
    );
}

export default VeganBlock;
