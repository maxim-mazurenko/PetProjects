import React from "react";
import "./authorization.scss";
import Request from "../request/request";

const Authorization = () => {
  return (
    <>
      <nav className="authorization">
        <div className="container">
          <div className="authorization__header">Авторизация</div>
        </div>
      </nav>

      <div className="authorization__form-auto">
        <input
          className="authorization__form-inp"
          type="email"
          name="email"
          id="email_auto"
          placeholder="Введите ваш email"
          required
          value="test@test"
        />
        <input
          className="authorization__form-inp"
          type="password"
          name="password"
          id="password_auto"
          placeholder="Введите пароль"
          required
          value="010101"
        />
        <button
          onClick={Request}
          className="authorization__form-btn"
          type="submit"
          id="submim_auto"
        >
          Войти
        </button>
      </div>
    </>
  );
};

export default Authorization;
