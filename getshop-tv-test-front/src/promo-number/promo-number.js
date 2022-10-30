import { Component } from "react";
import "./promo-number.scss";
import QR from "../img/index 1.png";
import NumberInput from "../number-input/number-input";

class PromoNumder extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="promonumber">
        <NumberInput />

        <div className="promonumber__right">
          <div className="promonumber__right-close">
            <span className="promonumber__right-close-1"></span>
            <span className="promonumber__right-close-2"></span>
          </div>
          <div className="promonumber__right-qr">
            <p className="promonumber__right-qr-text">
              Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
            </p>
            <img className="promonumber__right-qr-img" src={QR} alt="qr" />
          </div>
        </div>
      </div>
    );
  }
}

export default PromoNumder;
