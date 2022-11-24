import Footer from "./footer";
import Menu from "./menu";
import Menu_mobile from "./menu_mobile";
import Banner from "../sectionFive/banner";
import BackToTop from "./backToTop";
import Whatsapp from "./whatsApp";

function Layout({ children }) {
  return (
    <>
      <Menu_mobile />
      <Menu />
      {children}
      <BackToTop />
      <Whatsapp />
      <Footer />
    </>
  );
}

export default Layout;
