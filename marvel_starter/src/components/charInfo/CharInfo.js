import { Component} from 'react';

import MarvelServise from '../../services/MarvelServise';
import Spinner from '../spiner/Spiner';
import ErrorMasseg from '../errorMessag/ErrorMasseg';
import Skeleton from '../skeleton/Skeleton';
import './charInfo.scss';

class CharInfo extends Component {

    state = {
        char: null,
        loading: false  ,
        error: false
    }

    marvelServise = new MarvelServise();

    componentDidMount() {
        this.updateChar()
    }

    componentDidUpdate(prevProps, prevState) {
          if(this.props.charId !== prevProps.charId) {
            this.updateChar()
          }
    }

    
 

    onChatLoaded = (char) => {
        this.setState({char, loading: false})
    }

    onError = () => {
        this.setState({loading: false, error: true})
    }

    onCharLoading = () => {
        this.setState({loading: true})
    }


    updateChar = () => {
        const {charId} = this.props;
        if (!charId) {
            return;
        }
        
        this.onCharLoading()
        this.marvelServise
        .getCharacter(charId)
        .then(this.onChatLoaded)
        .catch(this.onError)
    }
    render() {
        const {char, loading, error} = this.state;
        
        const skeleton = char || loading || error ? null : <Skeleton/>;
        const errorMasseg = error ? <ErrorMasseg/> : null;
        const spiner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;

        return (
            <div className="char__info">
                {skeleton}
                {errorMasseg}
                {spiner}
                {content}
            </div>
        )
    }
    
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;
    const iNot = thumbnail.includes('image_not_available');
    
    return (
        <>
             <div className="char__basics">
                    <img style={iNot ? {objectFit: 'contain'} : null} src={thumbnail} alt={name}/>
                    <div>
                        <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                <ul className="char__comics-list">
                    {comics.length > 0 ? null : 'There is no comics with this character'}
                    {comics.map((item, i) => {
                        if (i > 9) return;
                        return (
                            <li key={i} className="char__comics-item">
                                {item.name}
                            </li>
                        )
                    })}
                    
                    
                </ul>
        </>
    )
}



export default CharInfo;