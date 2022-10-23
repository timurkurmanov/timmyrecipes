import React from 'react';
import s from "./Category.module.css"
import {NavLink} from "react-router-dom";
import {TbLayersDifference, TbMeat} from "react-icons/tb";
import {GiChickenOven, GiDoubleFish, GiGreenhouse, GiNoodles, GiWrappedSweet} from "react-icons/gi";
import {MdOutlineFreeBreakfast} from "react-icons/md";
import {Splide, SplideSlide} from "@splidejs/react-splide";
import '@splidejs/react-splide/css';
import {motion} from 'framer-motion'

const Category = () => {

    return (
        <div className={s.CategoryWrapper}>

            <div className={s.CategoryItemsBlock}>
                <Splide options={{
                    perPage: 6,
                    arrows: false,
                    pagination: false,
                    drag: "free"
                }}>
                    <SplideSlide>
                        <NavLink to={'category/chicken'}>
                            <motion.div whileTap={{scale: 0.9}}
                                        transition={{type: "spring", stiffness: 400, damping: 17}}
                                        className={s.CategoryItem}><GiChickenOven/><p>Chicken</p></motion.div>
                        </NavLink>
                    </SplideSlide>
                    <SplideSlide>
                        <NavLink to={'category/dessert'}>
                            <motion.div whileTap={{scale: 0.9}}
                                        transition={{type: "spring", stiffness: 400, damping: 17}}
                                        className={s.CategoryItem}><GiWrappedSweet/><p>Dessert</p></motion.div>
                        </NavLink>
                    </SplideSlide>
                    <SplideSlide>
                        <NavLink to={'category/pasta'}>
                            <motion.div whileTap={{scale: 0.9}}
                                        transition={{type: "spring", stiffness: 400, damping: 17}}
                                        className={s.CategoryItem}><GiNoodles/> <p>Pasta</p></motion.div>
                        </NavLink>
                    </SplideSlide>
                    <SplideSlide>
                        <NavLink to={'category/seafood'}>
                            <motion.div whileTap={{scale: 0.9}}
                                        transition={{type: "spring", stiffness: 400, damping: 17}}
                                        className={s.CategoryItem}><GiDoubleFish/> <p>Seafood</p></motion.div>
                        </NavLink>
                    </SplideSlide>
                    <SplideSlide>
                        <NavLink to={'category/vegan'}>
                            <motion.div whileTap={{scale: 0.9}}
                                        transition={{type: "spring", stiffness: 400, damping: 17}}
                                        className={s.CategoryItem}><GiGreenhouse/> <p>Vegan</p></motion.div>
                        </NavLink>
                    </SplideSlide>
                    <SplideSlide>
                        <NavLink to={'category/breakfast'}>
                            <motion.div whileTap={{scale: 0.9}}
                                        transition={{type: "spring", stiffness: 400, damping: 17}}
                                        className={s.CategoryItem}><MdOutlineFreeBreakfast/><p>Breakfast</p>
                            </motion.div>
                        </NavLink>
                    </SplideSlide>
                    <SplideSlide>
                        <NavLink to={'category/miscellaneous'}>
                            <motion.div whileTap={{scale: 0.9}}
                                        transition={{type: "spring", stiffness: 400, damping: 17}}
                                        className={s.CategoryItem}><TbLayersDifference/><p>Other</p></motion.div>
                        </NavLink>
                    </SplideSlide>
                </Splide>
            </div>
        </div>
    );
}

export default Category;
