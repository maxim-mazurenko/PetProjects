import "./OurBest.scss";
import img1 from "../../img/Solimo Coffee Beans 2 kg.jpg";
import img2 from "../../img/Presto Coffee Beans 1 kg.jpg";
import img3 from "../../img/AROMISTICO Coffee 1 kg.jpg";

const data = [
  { img: img1, name: "Solimo Coffee Beans 2 kg", price: "10.73$" },
  { img: img2, name: "Presto Coffee Beans 1 kg", price: "15.99$" },
  { img: img3, name: "AROMISTICO Coffee 1 kg", price: "6.99$" },
];

const OurBest = () => {
  return (
    <div className="OurBest">
      <div className="countainer">
        <h2 className="OurBest__h2">Our best</h2>
        <div className="OurBest__items">
          {data.map((item, i) => {
            return (
              <div key={i + 1} className="OurBest__item">
                <img src={item.img} alt={item.name} />
                <p className="OurBest__name">{item.name}</p>
                <p className="OurBest__price">{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurBest;
