import "../styles/globals.scss";
import Layout from "../Components/organisms/Layout";
import AppContextProvider from "../base/Context/AppContext";
function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContextProvider>
  );
}

export default MyApp;
