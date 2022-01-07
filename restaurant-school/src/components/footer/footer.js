import { Component } from "react";



import './footer.scss';



 class Footer extends Component  {
    constructor(props) {
        super(props) 
        this.state = {
            anim: false
        }
    }


    anim = (e) => {
        const home = e.currentTarget;
        home.classList.add('anim');
        const remove = () => {
            home.classList.remove('anim')
        }
        setTimeout(remove, 500)
    }

        render() {
            return(
                <div className="footer">
        
                        <div onClick={this.props.home}><i onClick={this.anim} className="fas fa-home"></i></div>
                        <div onClick={this.props.back}><i onClick={this.anim} className="fas fa-backward"></i></div>
                        {/* <div ><i onClick={this.anim} className="fas fa-user"></i></div> */}
                        
                        
      
                </div>
            )
        }
        
    
}




export default Footer





