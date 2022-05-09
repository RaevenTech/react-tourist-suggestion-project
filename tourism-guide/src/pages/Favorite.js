import React from "react";
import { useContext } from "react";
import FavoritesContext from "../store/Favorite-context";
import PostList from "../components/posts/PostList";

export default function FavoritePage() {
    const favouriteCtx = useContext(FavoritesContext);

    let content;
    if (favouriteCtx.totalFavorites === 0) {
        content = <h3> Add Favorites Here!</h3>;
    } else {
        content = <PostList meetups={favouriteCtx.favorites} />;
    }

    return (
        <section>
            <h1> My favorites </h1>
            {content}
        </section>
    );
}
