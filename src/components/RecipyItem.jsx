import React from 'react';
import s from './RecipyItem.module.css'

const RecipyItem = (props) => {
    return (
        <div className={s.RecipyItemWrapper}>
            <div className={s.RecipyItemImage}><img src={props.image} alt=""/></div>
            <div className={s.RecipyItemTitle}><h3>{props.title}</h3></div>
        </div>
    );
}

export default RecipyItem;
