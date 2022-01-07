import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../seach-panel/seach-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';

import './app.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {name: "Max", salary: 3000, id: 1, increase: false, rise: false},
                {name: "Alex", salary: 800, id: 2, increase: false, rise: false},
                {name: "Sasha", salary: 1200, id: 3, increase: false, rise: false},
            ],

        }

        this.maxId = 4;
        
    }
    
    deleteItem = (id) => {
        const data = this.state.data;
        
        this.setState({
            data: data.filter(item => item.id !== id)
        })
        
        // второй вариант 
       /*  this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1); 

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        })  */
    }

    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            id: this.maxId++,
            increase: false, 
            rise: false
            
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr,
            }
        });
    }

    onToggleProp = (id, prop) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id) {
                    return {...item, [prop]: !item[prop]}
                }
                return item
            })
        }))
    };


        


    render() {
        const {data} = this.state;
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length;
        return(
            <div className="app">
                
                <AppInfo count={employees}
                          increased={increased}  />
    
                <div className="search-panel">
                    <SearchPanel/>
                    <AppFilter/>
                </div>
    
                <EmployersList 
                    data={data}
                    onDelete={this.deleteItem}
                    onToggleProp={this.onToggleProp}
                 />
    
                <EmployersAddForm onAdd={this.addItem}/>
    
            </div>
        );
    }
    
}


export default App;


