import "./video.scss";
import QR from "../img/index 1.png";

const Video = (props) => {
  function action() {
    document.querySelector(".video__link-baner").classList.add("active");
    document.querySelector(".video__link-baner-btn").focus();
  }
  setTimeout(action, 5000);

  return (
    <div className="video">
      <iframe
        className="video__promo"
        width="1280"
        height="720"
        src="https://www.youtube.com/embed/M7FIvfx5J10?autoplay=1&mute=1&showinfo=0&controls=0&loop=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></iframe>
      <div className="video__link">
        <div className="video__link-baner">
          <h3 className="video__link-baner-h3">
            ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША! ПОДАРИТЕ ЕМУ СОБАКУ!
          </h3>
          <img src={QR} alt="QR" />
          <p className="video__link-baner-p">
            Сканируйте QR-код или нажмите ОК
          </p>
          <button
            onClick={props.enterFunction}
            onKeyDown={props.enterFunction}
            className="video__link-baner-btn"
          >
            ОК
          </button>
        </div>
      </div>
    </div>
  );
};

export default Video;
