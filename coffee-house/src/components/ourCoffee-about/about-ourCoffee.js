import "./about-ourCoffee.scss";

const OurCoffeeAbout = (props) => {
  return (
    <div className="OurCoffeeAbout">
      <div className="countainer">
        <div className="OurCoffeeAbout__block">
          <img className="OurCoffeeAbout__img" src={props.img} alt="girl" />
          <div className="OurCoffeeAbout__items">
            <h3>{props.h3}</h3>
            <img src={props.beans} alt="beans" />
            <p>{props.text}</p>
          </div>
        </div>
      </div>
      <span className="OurCoffeeAbout__border"></span>
    </div>
  );
};

export default OurCoffeeAbout;
