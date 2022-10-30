import { Component } from "react";

import user from "../cookie/cookie";
import Authorization from "../authorization/authorization";
import inputUser from "../authorization/authorization";
import Courses from "../courses/courses";
import Header from "../header/header";
import ItemListCourses from "../item-list-Courses/item-list-Courses";
import ItemCourses from "../itemCourses/itemCourses";
import Footer from "../footer/footer";
import Testing from "../testing/testing";

import "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: "",
      itemlistCourses: "",
      testing: "",
    };
  }

  onCourses = (e) => {
    this.setState({
      courses: e.currentTarget.id,
    });
  };

  onItemListCourses = (e) => {
    this.setState({
      itemlistCourses: e.currentTarget.id,
    });
  };

  home = () => {
    this.setState({
      courses: "",
      itemlistCourses: "",
      testing: "",
    });
  };

  back = () => {
    const { courses, itemlistCourses } = this.state;
    this.setState(() => {
      if (itemlistCourses !== "") {
        return {
          itemlistCourses: "",
        };
      } else if (courses !== "") {
        return {
          courses: "",
        };
      }
    });
  };

  testing = () => {
    this.setState({
      testing: document.querySelector(".header__header").innerHTML,
    });
  };

  render() {
    const { courses, itemlistCourses, testing } = this.state;
    <user />;

    if (user.email === "Admin@link") {
      window.location.href = "../admin.html";
    } else if (user.email === undefined) {
      return (
        <div className="app">
          <Authorization />
        </div>
      );
    } else if (testing !== "") {
      return (
        <div className="app">
          <Header name="Тестирование " />
          <Testing id={testing} home={this.home} />
        </div>
      );
    } else if (courses === "") {
      return (
        <div className="app">
          <Header name="Trainings" />
          <Courses onCourses={this.onCourses} />
          <Footer home={this.home} back={this.back} />
        </div>
      );
    } else if (itemlistCourses && courses !== "") {
      return (
        <div className="app">
          <Header name={this.state.itemlistCourses} />
          <ItemCourses
            name={this.state.itemlistCourses}
            item={this.state.itemlistCourses}
            testing={this.testing}
          />
          <Footer home={this.home} back={this.back} />
        </div>
      );
    } else if (courses !== "") {
      return (
        <div className="app">
          <Header name={this.state.courses} />
          <ItemListCourses
            name={this.state.courses}
            onItemListCourses={this.onItemListCourses}
            item={this.state.courses}
          />
          <Footer home={this.home} back={this.back} />
        </div>
      );
    }
  }
}

export default App;
