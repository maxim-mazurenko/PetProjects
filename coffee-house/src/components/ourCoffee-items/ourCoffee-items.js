import "./ourCoffee-items.scss";
import img from "../../img/AROMISTICO Coffee 1 kg.jpg";

const OurCoffeeItems = (props) => {
  const { data, tern, onUpdataSearch, upFilter } = props;

  return (
    <div className="OurCoffeeItems">
      <div className="countainer">
        <div className="OurCoffeeItems__filter">
          <p className="OurCoffeeItems__p1">Lookiing for</p>
          <input
            className="OurCoffeeItems__in"
            type="text"
            placeholder="start typing here..."
            value={tern}
            onChange={onUpdataSearch}
          />
          <p className="OurCoffeeItems__p2">Lookiing for</p>
          <ul className="OurCoffeeItems__btn">
            <li onClick={upFilter}>All</li>
            <li onClick={upFilter}>Brazil</li>
            <li onClick={upFilter}>Kenya</li>
            <li onClick={upFilter}>Columbia</li>
          </ul>
        </div>
        <div className="OurCoffeeItems__items">
          {data.map((item, i) => {
            return (
              <div key={i + 1} className="OurCoffeeItems__item">
                <img src={img} alt={item.name} />
                <p className="OurCoffeeItems__name">{item.name}</p>
                <p className="OurCoffeeItems__country">{item.country}</p>
                <p className="OurCoffeeItems__price">{item.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OurCoffeeItems;
