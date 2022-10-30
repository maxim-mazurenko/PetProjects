import { Component } from "react";

import "../../index.scss";
import "./courses.scss";

class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      idCourses: "",
    };
  }

  componentDidMount() {
    fetch("../server/requestCourses.php")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result,
          });
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, items, idCourses } = this.state;
    if (error) {
      return (
        <div style={{ margin: "0 auto", marginTop: 80 }}>
          Ошибка: {error.message}
        </div>
      );
    } else if (!isLoaded) {
      return (
        <div
          style={{ margin: "0 auto", marginTop: 120 }}
          className="cssload-spin-box"
        ></div>
      );
    } else {
      return (
        <>
          {items.map((item) => (
            <div
              id={item.text}
              key={item.id}
              onClick={this.props.onCourses}
              className="courses__item"
            >
              <div className="courses__item-img">
                <img src={item.img} alt={item.alt} />
              </div>

              <div className="courses__item-text">{item.text}</div>
            </div>
          ))}
        </>
      );
    }
  }
}

export default Courses;
