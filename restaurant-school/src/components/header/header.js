import './header.scss';


function Header (props) {
    return (
        <nav className="header">
            <div className="header__header">{props.name}</div>
            
        </nav>
    )
}

export default Header;