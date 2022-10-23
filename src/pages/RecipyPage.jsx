import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom"
import axios from "axios";
import s from "./RecipyPage.module.css"
import RecipyItem from "../components/RecipyItem";
import {useNavigate} from "react-router-dom";
import {GiEarthAfricaEurope} from "react-icons/gi";
import {motion} from 'framer-motion'

function RecipyPage() {
    const [recipy, setRecipy] = useState({})
    const [activeTab, setActiveTab] = useState('instructions')
    let params = useParams()
    const getRecipyDetais = () => {
        const options = {
            method: 'GET',
            url: `https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=${params.name}`,
        };
        axios.request(options).then(function (response) {
            setRecipy(response.data.meals[0])
        }).catch(function (error) {
            console.error(error);
        });
    }
    useEffect(() => {
        getRecipyDetais()

    }, [params.name])

    return (
        <div className={s.RecipyPageWrapper}>
            <div className={s.RecipyPageItem}>
                <div className={s.RecipyPageHeader}>
                    <h3>{recipy.strMeal}</h3>
                    <div className={s.RecipyTags}>{recipy.strTags}</div>
                </div>
                <div className={s.RecipyInfo}>
                    <motion.div
                        animate={{opacity: 1}}
                        initial={{opacity: 0}}
                        exit={{opacity: 0}}
                        transition={{ease: "easeOut", duration: 1}}
                        className={s.RecipyImage}>
                        <img src={recipy.strMealThumb} alt=""/>
                    </motion.div>
                    <div className={s.RecipyDescription}>
                        <div className={s.ControlButton}>
                            <motion.div
                                whileTap={{scale: 0.9}}
                                transition={{type: "spring", stiffness: 400, damping: 17}}
                                onClick={() => {
                                    setActiveTab('instructions')
                                }} className={s.RecipyButton}>Instructions
                            </motion.div>
                            <motion.div
                                whileTap={{scale: 0.9}}
                                transition={{type: "spring", stiffness: 400, damping: 17}}
                                onClick={() => {
                                    setActiveTab('ingredients')
                                }} className={s.RecipyButton}>Ingridients
                            </motion.div>
                        </div>
                        {activeTab === 'instructions' &&
                        <div className={s.RecipyDescriptionText}>
                            <h3 dangerouslySetInnerHTML={{__html: recipy.strInstructions}}/>
                        </div>}
                        {activeTab === 'ingredients' && <div className={s.RecipyDescriptionIngredients}>
                            <div className={s.Ingr}>
                                <div
                                    className={s.IngrItem}>{!(recipy.strIngredient1 === "") && recipy.strIngredient1}</div>
                                <div
                                    className={s.IngrItem}>{!(recipy.strIngredient2 === "") && recipy.strIngredient2}</div>
                                <div
                                    className={s.IngrItem}>{!(recipy.strIngredient3 === "") && recipy.strIngredient3}</div>
                                <div
                                    className={s.IngrItem}>{!(recipy.strIngredient4 === "") && recipy.strIngredient4}</div>
                                <div
                                    className={s.IngrItem}>{!(recipy.strIngredient5 === "") && recipy.strIngredient5}</div>
                                <div
                                    className={s.IngrItem}>{!(recipy.strIngredient6 === "") && recipy.strIngredient6}</div>
                                <div
                                    className={s.IngrItem}>{!(recipy.strIngredient7 === "") && recipy.strIngredient7}</div>
                                <div
                                    className={s.IngrItem}>{!(recipy.strIngredient8 === "") && recipy.strIngredient8}</div>
                                <div
                                    className={s.IngrItem}>{!(recipy.strIngredient9 === "") && recipy.strIngredient9}</div>
                                <div
                                    className={s.IngrItem}>{!(recipy.strIngredient10 === "") && recipy.strIngredient10}</div>
                            </div>
                            <div className={s.Meas}>
                                <div className={s.MeasItem}>{!(recipy.strMeasure1 === "") && recipy.strMeasure1}</div>
                                <div className={s.MeasItem}>{!(recipy.strMeasure2 === "") && recipy.strMeasure2}</div>
                                <div className={s.MeasItem}>{!(recipy.strMeasure3 === "") && recipy.strMeasure3}</div>
                                <div className={s.MeasItem}>{!(recipy.strMeasure4 === "") && recipy.strMeasure4}</div>
                                <div className={s.MeasItem}>{!(recipy.strMeasure5 === "") && recipy.strMeasure5}</div>
                                <div className={s.MeasItem}>{!(recipy.strMeasure6 === "") && recipy.strMeasure6}</div>
                                <div className={s.MeasItem}>{!(recipy.strMeasure7 === "") && recipy.strMeasure7}</div>
                                <div className={s.MeasItem}>{!(recipy.strMeasure8 === "") && recipy.strMeasure8}</div>
                                <div className={s.MeasItem}>{!(recipy.strMeasure9 === "") && recipy.strMeasure7}</div>
                                <div className={s.MeasItem}>{!(recipy.strMeasure10 === "") && recipy.strMeasure10}</div>
                            </div>
                        </div>}

                    </div>
                </div>

            </div>

        </div>
    );
}

export default RecipyPage;
