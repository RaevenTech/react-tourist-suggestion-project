import React from "react";
import Card from "../Ui/Card";
import classes from "./PostItems.module.css";
import { useContext } from "react";
import FavoritesContext from "../../store/Favorite-context";

export default function PostItems(props) {
    const favouriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favouriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favouriteCtx.removeFavorite(props.id);
        } else {
            favouriteCtx.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
            });
        }
    }
    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {itemIsFavorite
                            ? "Remove From Favorites"
                            : "Add To Favorites"}
                    </button>
                </div>
            </Card>
        </li>
    );
}
