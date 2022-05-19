import { Component } from 'react';
import PropTypes from 'prop-types';
import './charList.scss';
import MarvelServise from '../../services/MarvelServise';
import Spinner from '../spiner/Spiner';
import ErrorMasseg from '../errorMessag/ErrorMasseg';
import Spiner2 from '../spiner2/Spiner2';
import ReactDOM from 'react-dom';




class CharList extends Component {
    

    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        offset: 210,
        chaeEnded: true
    }

    marvelServise = new MarvelServise();



    componentDidMount = () => {
        this.updateAllChar()
    }

    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelServise.getAllCharacters(offset)
            .then(this.onCharLoading)
            .catch(this.onError)
    }

    onCharLoading = (res) => {
        let ended = false;
        if (res.length < 9) {
            ended = true;
        }

        this.setState(({charList, offset}) => ({
            charList: [...charList, ...res], 
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            chaeEnded: ended
        }))
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false, 
            error: true
        })
    }

    updateAllChar = () => {
        this.onRequest()
    }
  
    itemRefs = [];

    setRef = (ref) => {
        this.itemRefs.push(ref);
        
    }

    focusOnItem = (id) => {
        this.itemRefs.forEach(item => item.classList.remove('char__item_selected'));
        this.itemRefs[id].classList.add('char__item_selected');
        this.itemRefs[id].focus();
    }



    renderItems(arr) {
        const items =  arr.map((item, i) => {
            
            
            return (
                <li 
                    className="char__item"
                    tabIndex={0}
                    ref={this.setRef}
                    key={item.id}
                    
                    onClick={() => {
                        this.props.onSelectedChar(item.id);
                        this.focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                        if (e.key === ' ' || e.key === "Enter") {
                            this.props.onSelectedChar(item.id);
                            this.focusOnItem(i);
                        }
                    }}>
                        <img  src={item.thumbnail} alt={item.name} style={item.style}/>
                        <div  className="char__name">{item.name}</div>
                </li>
            )
        });
        // А эта конструкция вынесена для центровки спиннера/ошибки
        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }


    render () {
        const {loading, error, offset, newItemLoading, chaeEnded, charList} = this.state;
        
       

        const newCharList = charList.map(item => {
                if (item.thumbnail.includes('image_not_available')) {item.style = {objectFit: 'unset'}}

                return item
        });

        const items = this.renderItems(newCharList);

        const errorMasseg = error ? <ErrorMasseg/> : null;
        const spiner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? items : null;

        
        return (
            

              <div className="char__list">
                    {spiner}
                    {errorMasseg}
                    {content}



                <button 
                    onClick={() => this.onRequest(offset)} 
                    className="button button__main button__long"
                    disabled={newItemLoading}
                    style={{'display': chaeEnded ? 'none' : 'block'}}

                    >
                    <div className="inner">{newItemLoading ? <Spiner2/> : 'load more'}</div>
                </button>
              
                
            </div>

            


        )


        
    }
   
}





CharList.propTypes = {
    onSelectedChar: PropTypes.func.isRequired
};

export default CharList;