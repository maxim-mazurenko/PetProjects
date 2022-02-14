import { Component } from 'react';
import './App.scss';
import Video from '../video/video';
import PromoNumder from '../promo-number/promo-number';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        promoNumder: false
    }
  }


  enterFunction(e){
    if(e.code === 'Enter' || e.detail === 1) {
      this.setState({promoNumder: true})
    }
    
}



  render() {
     const {promoNumder} = this.state;
    if(!promoNumder) {

        return(

          <div className="App">
            <Video enterFunction={(e)=> this.enterFunction(e)} />
          </div>

        )
        

    } else if(promoNumder) {

      return (
        
        <div className="App">
            <PromoNumder/>
        </div>
        
        )
    }
    
  }
}


export default App;
