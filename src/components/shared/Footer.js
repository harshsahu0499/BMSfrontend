import React from "react";
import classes from "./Footer.module.css"

const Footer = () => {
    return (
        <footer className={classes.bottom}>
            <p className="text-center text-light">
                Building Management System / EPITA Spring 2022
            </p>
        </footer>
    );
};

export default Footer;
