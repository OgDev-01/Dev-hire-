import { useContext, useEffect } from "react";
import axios from "axios";
import Card from "../Components/atoms/card/card";
import Page from "../Components/organisms/sections";
import { AppContext } from "../base/Context/AppContext";
export default function Index({ services, currencies }) {
  const { hits } = services.data.service_search_results;
  const currency = currencies.data.currencies;
  const net_conversion_rate = currencies.data.net_conversions;
  const developers = hits.map((hit) => hit._source);
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: "updateSellers", value: developers });
    dispatch({ type: "updateCurrencies", value: currency });
    dispatch({ type: "updateNetConversionRate", value: net_conversion_rate });
    dispatch({ type: "updateNetRate" });
  }, [dispatch]);

  // console.log();
  return (
    <>
      <Page heading="Hire Top Developers">
        {Array.isArray(state.sellers) &&
          state.sellers.map((dev, index) => <Card key={index} {...dev} />)}
      </Page>
    </>
  );
}

export async function getStaticProps() {
  const baseUrl = "https://api.terawork.com";
  const response = await axios.get(
    `${baseUrl}/service-categories/sellers-services/computer-software-development`
  );
  const services = await response.data;
  const res = await axios.get(`${baseUrl}/resources`);
  const currencies = await res.data;

  return {
    props: {
      services,
      currencies,
    },
  };
}
