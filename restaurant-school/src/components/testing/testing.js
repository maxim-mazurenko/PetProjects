import { Component } from 'react';
import user from '../cookie/cookie';

import './testing.scss';






class Testing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descr: true,
            error: null,
            isLoaded: false,
            items: [],
            
        }
        this.answer = [];
    }


    componentDidMount() {
        fetch("../server/question.php")
        .then(res => res.json())
        .then((res) => {
              let a = res.filter(item => item.courses === this.props.id)
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
    

    descr = () => {

        this.setState({
            descr: !this.state.descr
        })
    }

    nextItem = (items, id, randomItem) => {
        const checked = document.querySelector('input[name=question_1]:checked');
        const lab = document.querySelector('label')

        
        


        if (checked === null) {
            alert('Выберите один из вариантов')
            return
        } else {

            const a = items.map(item => {
                if(item.id === id) {
                    item.answer = true
                }
                return item
            })
            this.setState({
                items: a,
            })

            let answerUser = {};

            answerUser.user = user.email;
            answerUser.courses = items[0].courses;
            answerUser.question = document.querySelector('h3').innerText;
            answerUser.answer = lab.innerText;
        if (randomItem[0].correct_answer === checked.value) {
            answerUser.answerCorrect = true
        } else {
            answerUser.answerCorrect = false
        }
        
        this.answer.push(answerUser)
            
        }      
        
    }

    postData = (home) => {
        const arr = JSON.stringify(this.answer);
        fetch('../server/anwers.php', {
        method: "POST",
        body: arr
        
    }).then(() => {
        this.setState({
            isLoaded: true
        })
    })

    alert('Результат сохранен');
    home()
    
    } 



    render(){
        const {descr, items, error, isLoaded} = this.state,
              filterItems = items.filter(item => item.answer !== true),
              lengthItems = filterItems.length,
              random = Math.floor(Math.random() * (lengthItems - 0)) + 0,
              randomItem = filterItems.filter((item, i) => i === random);


        

        if (lengthItems === 0) {
            return(
                <>
                <div className="test__end">
                    <h3>Тест завершен</h3>
                    <p></p>
                    <button onClick={() => this.postData(this.props.home)}>Завершить</button>
                
                 </div>
                </>
            )
                
            } else if(descr) {
            return(
                <div className='test'>
                    <div className="test__descr">
                        <h3>Выполни тест</h3>
                        <p>Тест состоит из 10 вопростов.</p>
                            
                            <button onClick={this.descr} type="submit">Начать</button>  
                    </div>
                </div>
            )
        }  else {
            if (error) {
                return <div style={{marginTop: 50}}>Ошибка: {error.message}</div>;
              } else if (!isLoaded) {
                return <div style={{margin: '0 auto', marginTop: 120 }} className='cssload-spin-box'></div>;
              } else{ 
                
                  return(
                      
                      <>
                      {randomItem.map(item => (
                          
                        <div className='test'>
                        <div id="question_1" className="test__item">
                            <h3>{item.question}</h3>
                                <div className="test__item-1-1">
                                    <input id="qu_1_1" type="radio" name="question_1" value="1"/>
                                    <label htmlFor="qu_1_1">{item.answer_1}</label>
                                </div>
                                <div className="test__item-1-2">
                                    <input id="qu_1_2" type="radio" name="question_1" value="2"/>
                                    <label htmlFor="qu_1_2">{item.answer_2}</label>
                                </div>
                                <div className="test__item-1-3">
                                    <input id="qu_1_3" type="radio" name="question_1" value="3"/>
                                    <label htmlFor="qu_1_3">{item.answer_3}</label>
                                </div>
                                <div className="test__item-1-3">
                                    <input id="qu_1_4" type="radio" name="question_1" value="4"/>
                                    <label htmlFor="qu_1_3">{item.answer_4}</label>
                                </div>
                                <button onClick={() => this.nextItem(items, item.id, randomItem)} id="btn_1" type="submit">Ответить</button>  
                        </div>
                    </div>))}

                    
                </>
            )}
           
            


        } 
        
    }
}





export default Testing;