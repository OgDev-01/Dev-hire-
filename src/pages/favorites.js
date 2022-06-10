import React, { useContext } from "react";
import { AppContext } from "../base/Context/AppContext";
import Card from "../Components/atoms/card/card";
import Page from "../Components/organisms/sections";

const Favorites = () => {
  const { state } = useContext(AppContext);
  const { favorites } = state;
  return (
    <div>
      <Page heading="Favorites">
        {Array.isArray(favorites) && favorites.length > 0 ? (
          favorites.map((favorite, index) => <Card key={index} {...favorite} />)
        ) : (
          <div>No favorite developer yet</div>
        )}
      </Page>
    </div>
  );
};

export default Favorites;
