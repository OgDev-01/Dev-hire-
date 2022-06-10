import { createContext, useReducer } from "react";

export const AppContext = createContext();

const initialState = {
  sellers: [],
  favorites: [],
  currencies: [],
  currencyId: 1,
  netConversionRate: [],
  buyCurrencyId: 1,
  currencyConversion: undefined,
  netRate: undefined,
  divider: 1,
  selectedOption: null,
};
const reducerFunction = (state, action) => {
  switch (action.type) {
    case "updateSellers":
      return { ...state, sellers: action.value };
    case "updateFavorites":
      return {
        ...state,
        favorites: updateFavorite(action.value, state.sellers, state.favorites),
      };
    case "updateCurrencies":
      return { ...state, currencies: action.value };

    case "updateNetConversionRate":
      return { ...state, netConversionRate: action.value };
    case "updateNetRate":
      return {
        ...state,
        netRate: updateNetRate(state.buyCurrencyId, state.netConversionRate),
      };
    case "updatePrice":
      return {
        ...state,
        currencyId: action.value.id,
        buyCurrencyId: action.value.id,
        divider: action.value.divider,
      };

    default:
      break;
  }
};
function updateFavorite(item, sellers, favorites) {
  // check match in sellers list
  const seller = sellers.filter((el) => el.cust_id === item);

  // add item if favorite is empty
  if (favorites.length === 0) {
    return seller;
  }
  if (favorites.length > 0) {
    const exist = favorites.find((el) => el.cust_id === seller[0].cust_id);
    if (exist) {
      return favorites.filter((el) => el.cust_id !== exist.cust_id);
    }
    if (!exist) {
      return [...favorites, seller[0]];
    }
  }
}

function updateNetRate(to, rates) {
  const net = rates.find((rate) => rate.buying_currency_id === to);
  return Number(net.net_rate);
}

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFunction, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
