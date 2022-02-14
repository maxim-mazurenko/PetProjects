import '../../App.scss';
import './promo-coffee-house.scss';
import Beanslogo from '../../img/Beanslogo.svg'


const Promo = () => {


    return (
        <div className="promo">

            <div className="countainer">

                <div className="promo__block">
                    <h1 className="promo__header">Everything You Love About Coffee</h1>
                    <img className="promo__img" src={Beanslogo} alt="Beanslogo" />

                    <p className="promo__p1">We makes every day full of energy and taste</p>
                    <p className="promo__p2">Want to try our beans?</p>
                    <button className="promo__btn">More</button>

                </div>
            </div>
        </div>    
    )


}


export default Promo;