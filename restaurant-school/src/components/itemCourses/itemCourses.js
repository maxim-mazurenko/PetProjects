import {Component} from 'react';

import './itemCourses.scss';




class ItemCourses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            inCourses: '',
        }
    }

    componentDidMount() {
        fetch("../server/requestCoursesItem.php")
          .then(res => res.json())
          .then(
            (result) => {
              let a = result.filter(item => item.text1 === this.props.name)

              this.setState({
                isLoaded: true,
                items: a
              });
            },
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )
      }

      show = () => {
        const textarea = document.querySelector('.training__item-textarea');
        const btn = document.querySelector('.training__item-btn');
        textarea.style.display = 'flex';
        btn.style.display = 'block';
        window.scrollBy(0, 300);

      }



    render() {
      const { error, isLoaded, items } = this.state;
    
    if (error) {
      return <div style={{marginTop: 50}}>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div style={{margin: '0 auto', marginTop: 120 }} className='cssload-spin-box'></div>;
    } else {
        return (
            <>
                {items.map(item => (
                  <div className="training">
                        <div className="training__material">
                           <video src={item.videoLink} poster="../../img/playbutton.png" controls="controls" width="100%" height="100%"></video>
                       </div>
                       <div className="training__desc">
                           <div className="training__desc-block1">
                                {item.textCourses}
                           </div>
                       </div>
                      
                                    
                          
           
                       <a href='https://www.google.com/' className="training__item">
                           <div className="training__item-img"><i className="fas fa-file-pdf"></i></div>
                           <div className="training__item-text">
                               <div className="training__item-text2">Дополнительный материал</div>
                           </div>
                       </a>
           
                      <div className="training__item" onClick={this.props.testing}>
                           <div className="training__item-img"><i className="fas fa-file-alt"></i></div>
                           <div className="training__item-text">
                               <div className="training__item-text2">Тестирование <br/>(начав, назад вернуться не возможно)</div>
                               {/* <div id="Resultat_bm" className="training__item-text3">Пройдено</div> */}
                           </div>
                       </div>
           
                       <div onClick={this.show} className="training__item">
                           <div className="training__item-img"><i className="fas fa-question-circle"></i></div>
                           <div className="training__item-text">
                               <div className="training__item-text2">Задать вопрос</div>
                           </div>
                       </div>
                       <div className="training__item-textarea">
                            <textarea placeholder="Напишите свой вопрос..." name="textarea" id="textarea" cols="30" rows="10"></textarea>
                            
                       </div>
                       <button className='training__item-btn'>Отправить</button>
                </div>
                ))}
            </>
        );
    }
  }
}


export default ItemCourses;

