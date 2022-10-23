import React from "react";
import s from "./Logo.module.css"
import {FaGithub, FaTelegram} from "react-icons/fa";
import {NavLink} from "react-router-dom";

function Logo() {

    return (
        <div className={s.LogoWrapper}>
            <NavLink to={"/"}><div className={s.Logo}><h3>TimmyRecipes</h3></div></NavLink>
            <div className={s.Social}>
                <div className={s.SocialItem}>
                    <a href="https://t.me/timmmmmmmmy" target="_blank"><div className={s.Logo}><FaTelegram/></div></a>
                </div>
                <div className={s.SocialItem}>
                    <a href="https://github.com/timurkurmanov" target="_blank"><div className={s.Logo}><FaGithub/></div></a>
                </div>
            </div>
        </div>
    );
}

export default Logo;
