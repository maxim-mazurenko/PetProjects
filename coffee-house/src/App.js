import { Component } from 'react';
import CoffeeHouse from './components/coffee-house/coffee-house';
import './App.scss';
import OurCoffee from './components/ourCoffee/ourCoffee';
import ForYourPleasure from './components/ForYourPleasure/ForYourPleasure';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
                coffeeHouse: true,
                ourBest: false,
                fyp: false

            


        }
    }


    onPage = (e) => {
        

        
        switch(e.target.textContent) {
            case 'Coffee house': 
                this.setState({
                    coffeeHouse: true,
                    ourBest: false,
                    fyp: false,
                });
                break;
            case 'Our coffee': 
                this.setState({
                    coffeeHouse: false,
                    ourBest: true,
                    fyp: false,
                });
                break;
            case 'For your pleasure':
                this.setState({
                    coffeeHouse: false,
                    ourBest: false,
                    fyp: true,
                });
                break;
            default:
        }
    }

    

    render() {
        const nav = this.state
        if(nav.coffeeHouse) {
            return(
                <CoffeeHouse onPage={(e) => this.onPage(e)}/>
            )
        } else if(nav.ourBest) {
            return(
                <OurCoffee onPage={(e) => this.onPage(e)}/>
            )
        } else if(nav.fyp) {
            return(
                <ForYourPleasure onPage={(e) => this.onPage(e)}/>
            )
        }
        
    }



}



export default App;
