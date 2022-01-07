import {Component} from 'react';

import './item-list-Courses.scss';




class ItemListCourses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            inCourses: '',
            date: Date.parse(new Date())
        }
    }

    componentDidMount() {
        fetch("../server/requestCoursesItem.php")
          .then(res => res.json())
          .then(
            (result) => {
             
              let a = result.map(item => {
                let data2 = Date.parse(item.startDate);
                if (this.state.date > data2) {
                  item.access = true
                } else {
                  item.access = false
                }
            
                return item
              });
              let b = a.filter(item => item.category === this.props.name)

              this.setState({
                isLoaded: true,
                items: b
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


    render() {
      const { error, isLoaded, items } = this.state;
    
    if (error) {
      return <div style={{marginTop: 50}}>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div style={{margin: '0 auto', marginTop: 120 }} className='cssload-spin-box'></div>;
    } else {
        return (
            <div className="bar">
                {items.map(item => (
                        <div key={item.id} id={item.text1} onClick={item.access ? this.props.onItemListCourses : null} className="bar__item">
                            <div className="bar__item-img">
                                <img src={item.imgItem} alt={item.text1}/>
                            </div>
                            <div className="bar__item-text">
                                <div className="bar__item-text1">
                                    ДАТА НАЧАЛА: {item.startDate}
                                </div>
                                <div className="bar__item-text2">
                                    {item.text1}
                                    <br/>{item.text2}
                                </div>
                                <div style={item.access ? {color: 'green'} : {color: 'red'}} className="bar__item-text3">
                                    {item.access ? 'Открыто' : 'Закрыто'}
                                </div>
                            </div>
                        
                        </div>
                ))}
            </div>
        );
    }
  }
}


export default ItemListCourses;

