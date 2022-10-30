import Nav from "../nav/nav";
import Logo from "../../img/LogoHeader.svg";
import OurCoffeeHeader from "../ourCoffee-header/header-ourCoffee";
import OurCoffeeAbout from "../ourCoffee-about/about-ourCoffee";
import imgfyp from "../../img/coffee-839233_1920.png";
import beans from "../../img/BeanslogoBlack.svg";
import Footer from "../footer/footer";

const ForYourPleasure = (props) => {
  const text = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

              Afraid at highly months do things on at. Situation recommend objection do intention
              so questions. 
              As greatly removed calling pleased improve an. Last ask him cold feel
              met spot shy want. Children me laughing we prospect answered followed. At it went
              is song that held help face.'`;
  return (
    <>
      <Nav onPage={props.onPage} logo={Logo} />
      <OurCoffeeHeader h1="For your pleasure" />
      <OurCoffeeAbout
        h3="About our goods"
        img={imgfyp}
        beans={beans}
        text={text}
      />

      <Footer onPage={props.onPage} />
    </>
  );
};

export default ForYourPleasure;
