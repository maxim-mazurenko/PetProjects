import "./number-input.scss";

const eventKeyboyrd = (e) => {};

const NumberInput = (props) => {
  return (
    <div id="promonumber__input" className="promonumber__input">
      <h3 className="promonumber__input-header">
        Введите ваш номер мобильного телефона
      </h3>
      <span className="promonumber__input-numder">{`+7(___)___-__-__`}</span>
      <p className="promonumber__input-text">
        и с Вами свяжется наш менеждер для
        <br /> дальнейшей консультации
      </p>
      <div
        onMouseOver={eventKeyboyrd}
        id="keyboard"
        className="promonumber__input-in"
      >
        <div id="1" className="promonumber__input-in-keyboard">
          1
        </div>
        <div id="2" className="promonumber__input-in-keyboard">
          2
        </div>
        <div id="3" className="promonumber__input-in-keyboard">
          3
        </div>
        <div id="4" className="promonumber__input-in-keyboard">
          4
        </div>
        <div id="5" className="promonumber__input-in-keyboard">
          5
        </div>
        <div id="6" className="promonumber__input-in-keyboard">
          6
        </div>
        <div id="7" className="promonumber__input-in-keyboard">
          7
        </div>
        <div id="8" className="promonumber__input-in-keyboard">
          8
        </div>
        <div id="9" className="promonumber__input-in-keyboard">
          9
        </div>
        <div id="clear" className="promonumber__input-in-keyboard">
          СТЕРЕТЬ
        </div>
        <div id="0" className="promonumber__input-in-keyboard">
          0
        </div>
      </div>
      <div className="promonumber__input-check">
        <input
          id="personal"
          className="promonumber__input-check-box"
          type="checkbox"
        />
        <label htmlFor="personal"></label>
        <p className="promonumber__input-check-text">
          Согласие на обработку <br /> персональных данных
        </p>
      </div>

      <button className="promonumber__input-btn">Подтвердить номер</button>
    </div>
  );
};

export default NumberInput;
