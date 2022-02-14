import { Component } from 'react';
import './ourCoffee.scss';
import OurCoffeeHeader from '../ourCoffee-header/header-ourCoffee';
import Nav from '../nav/nav';
import Logo from '../../img/LogoHeader.svg';
import ourCoffeeGirl from '../../img/ourCoffeeGirl.png';
import BeanslogoBlack from '../../img/BeanslogoBlack.svg';
import OurCoffeeAbout from '../ourCoffee-about/about-ourCoffee';
import OurCoffeeItems from '../ourCoffee-items/ourCoffee-items';
import Footer from '../footer/footer';


class OurCoffee extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: [
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: '6.99$'},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: '6.99$'},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
                {name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: '6.99$'},
            ],
            tern: '',
            filter: 'all'
        }

        
    }
    onUpdataSearch = (e) => {
        const tern = e.target.value;
        this.setState({tern})
        

    }

    searchEmp = (items, tern) => {
        if(tern.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.country.toLowerCase().includes(tern)
        })
    }

    searchFilter = (items, filter) => {

        switch(filter) {
            case 'all': return items;
            break;
            case 'Brazil': return items.filter(item => item.country === 'Brazil');
            break;
            case 'Kenya': return items.filter(item => item.country === 'Kenya');
            break;
            case 'Columbia': return items.filter(item => item.country === 'Columbia');
            break;
            default: return items;

        }

    }

    upFilter = (e) => {
        const filter = e.target.textContent;
        this.setState({filter: filter})
    }
    

    render() {

        const {data, tern, filter} = this.state;
        const visibleData = this.searchFilter(this.searchEmp(data, tern.toLowerCase()), filter);




        const text = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.\n
        Afraid at highly months do things on at. Situation recommend objection do intentionso questions.
        As greatly removed calling pleased improve an. Last ask him cold feelmet spot shy want. Children me laughing we prospect answered followed. At it wentis song that held help face.`

        

        return(
            <>
                <Nav onPage={(e) => this.props.onPage(e)} logo={Logo}/>
                <OurCoffeeHeader h1="Our Coffee"/>
                <OurCoffeeAbout img={ourCoffeeGirl} h3="About our beans" beans={BeanslogoBlack} text={text}/>
                <OurCoffeeItems upFilter={(e)=>this.upFilter(e)} onUpdataSearch={(e) => this.onUpdataSearch(e)} tern={this.state.tern} data={visibleData}/>
                <Footer onPage={(e) => this.props.onPage(e)}/>
            </>
            
        )
    }
}



export default OurCoffee;