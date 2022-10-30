import "./nav.scss";

const Nav = (props) => {
  return (
    <nav className="header">
      <img src={props.logo} alt="LogoHeader" />
      <ul>
        <li onClick={(e) => props.onPage(e)} style={props.fontColor}>
          Coffee house
        </li>
        <li onClick={(e) => props.onPage(e)} style={props.fontColor}>
          Our coffee
        </li>
        <li onClick={(e) => props.onPage(e)} style={props.fontColor}>
          For your pleasure
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
