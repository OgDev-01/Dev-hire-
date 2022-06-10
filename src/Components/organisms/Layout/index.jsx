import Footer from "../footer/Footer";
import MainNav from "../header/mainNav";

export const Layout = ({ children }) => {
  return (
    <div className="base-wrapper">
      <MainNav />
      <div className="main">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
