import Promo from "../promo-coffee-house/promo-coffee-house";
import Nav from "../nav/nav";
import LogoHeader from "../../img/LogoHeader.svg";
import AboutUs from "../AboutUS-coffee-house/aboutUs";
import OurBest from "../OurBest-coffee-house/OurBest";
import Footer from "../footer/footer";

const CoffeeHouse = (props) => {
  return (
    <>
      <Nav
        onPage={(e) => props.onPage(e)}
        logo={LogoHeader}
        fontColor={{ color: "white" }}
      />

      <Promo />
      <AboutUs />
      <OurBest />

      <Footer onPage={(e) => props.onPage(e)} />
    </>
  );
};

export default CoffeeHouse;
