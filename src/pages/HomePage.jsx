import React from 'react';
import VeganBlock from "../components/VeganBlock";
import Popular from "../components/Popular";
import s from "./HomePage.module.css"
import {motion} from 'framer-motion'

function HomePage() {
    return (
        <motion.div
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            exit={{opacity: 0}}
            transition={{ ease: "easeOut", duration: 2 }}>
            <div
                className={s.HomePageWrapper}>
                <VeganBlock/>
                <Popular/>
            </div>
        </motion.div>

    );
}

export default HomePage;
