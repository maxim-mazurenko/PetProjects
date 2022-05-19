import { Component } from 'react';
import './randomChar.scss';
import Spinner from '../spiner/Spiner';
import ErrorMasseg from '../errorMessag/ErrorMasseg';
import mjolnir from '../../resources/img/mjolnir.png';
import MarvelServise from '../../services/MarvelServise';

class RandomChar extends Component  {


    state = {
        char: {},
        loading: true,
        error: false
    }

    marvelServise = new MarvelServise();
    

    componentDidMount = () => {
        this.updateChar();
        /* this.intervalID = setInterval(this.updateChar, 5000) */
    }


    componentWillUnmount = () => {
        clearInterval(this.intervalID)
    }
    onChatLoaded = (char) => {
        this.setState({char, loading: false})
    }

    onError = () => {
        this.setState({loading: false, error: true})
    }



    updateChar = () => {
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        this.marvelServise
            .getCharacter(id)
            .then(this.onChatLoaded)
            .catch(this.onError)
    }

    updateCharTry = () => {
        this.updateChar();
        this.setState({loading: true, error: false})
    }


    render() {
        const {char, loading, error} = this.state;
        const errorMasseg = error ? <ErrorMasseg/> : null;
        const spiner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

        return (
            <div className="randomchar">
              {errorMasseg}
              {spiner}
              {content}
                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br/>
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button className="button button__main" onClick={this.updateCharTry}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
                </div>
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki} = char;
    const iNot = thumbnail.includes('image_not_available');
    return (
        <div className="randomchar__block">
            <img src={thumbnail} style={iNot ? {objectFit: 'contain'} : null} alt="Random character" className="randomchar__img"/>
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">
                    <a href={homepage} className="button button__main">
                        <div className="inner">homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default RandomChar;