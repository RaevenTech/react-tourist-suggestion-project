import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>Tourist Guide</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Posts..</Link>
                    </li>
                    <li>
                        <Link to="/new-post">Add New Posts.</Link>
                    </li>
                    <li>
                        <Link to="/favorite">My Favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
