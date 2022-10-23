import React, {useEffect, useState} from 'react';
import s from "./NotFound.module.css"

function NotFound() {

    return (
        <div className={s.NotFoundWrapper}>
            <h3>Oops</h3>
            <h1>Not found :(</h1>
            <p>Try another one</p>
        </div>
    );
}

export default NotFound;
