import { createContext, useState } from "react";
import React from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetupId) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserfavorites] = useState([]);

    function addFavoriteHandler(favoriteMeetup) {
        setUserfavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserfavorites((prevUserFavorites) => {
            return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        return userFavorites.some((meetup) => meetup.id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler,
    };

    return (
        <FavoritesContext.Provider value={context}>
            {props.children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContext;
