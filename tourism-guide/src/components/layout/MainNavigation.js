import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/Favorite-context";

export default function MainNavigation() {
    const favoriteCtx = useContext(FavoritesContext);

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
                        <Link to="/favorite">
                            My Favorites
                            <span className={classes.badge}>
                                {favoriteCtx.totalFavorites}
                            </span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
