import './footer.scss';
import BeanslogoBlack from '../../img/BeanslogoBlack.svg';
import LogoBlack from '../../img/LogoBlack.svg'
import Nav from '../nav/nav';


const Footer = (props) => {

    return (

        <div className="footer">
            <Nav onPage={(e) => props.onPage(e)} logo={LogoBlack} fontColor={{color: 'black'}} />
            <img className='footer__img' src={BeanslogoBlack} alt={BeanslogoBlack} />
        </div>
    )

}

export default Footer;