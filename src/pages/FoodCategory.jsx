import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom"
import axios from "axios";
import s from "./FoodCategory.module.css"
import RecipyItem from "../components/RecipyItem";
import {motion} from 'framer-motion'
function FoodCategory() {
    const [category, setCategory] = useState([])
    let params = useParams()

    const getCategory = async (name) => {
        const options = {
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v2/9973533/filter.php?c=${name}`,
        };
        axios.request(options).then(function (response) {
            console.log(response.data);
            setCategory(response.data.meals)
        }).catch(function (error) {
            console.error(error);
        });
    }

    useEffect(() => {
        getCategory(params.type)
    }, [params.type]);

    return (
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{ ease: "easeInOut", duration: 1 }}
            className={s.FoodCategoryWrapper}>
            <div className={s.FoodCategoryItemsBlock}>
                {category.map((category) => {
                    return (
                        <Link to={'/recipypage/' + category.idMeal}>
                            <div className={s.FoodCategoryItem}><RecipyItem image={category.strMealThumb}
                                                                            title={category.strMeal}/></div>
                        </Link>
                    )
                })}
            </div>
        </motion.div>
    );
}

export default FoodCategory;
