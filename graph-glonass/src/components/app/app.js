import { Component } from 'react'
import Table1 from '../table1/table1';
import Table2 from '../table2/table2';
import Table3 from '../table3/table3';

import './app.css'


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            table1: [
                {input1: 1, input2: 5, id: 1},
                {input1: 1, input2: 7, id: 2},
            ],
            table2: [
                {input1: 8, input2: 3, id: 1},
                {input1: 4, input2: 6, id: 2},
            ],
            table3: [{input1: 0, input2: 0, id: 2}],

        }
        this.maxId = 3;

    }




    deleteItem = (id, name) => {
        const {table1, table2} = this.state;
        const newtable1 = table1.filter(item => item.id !== id )
        const newtable2 = table2.filter(item => item.id !== id )

        if (name === 'table1') {
            this.setState({
                table1: newtable1
            })
    
        } else if (name === 'table2') {
            this.setState({
                table2: newtable2
            })
        }
        

    }

    addItem = (name) => {
        const newItem = {
            input1: document.querySelectorAll('input').value,
            input2: document.querySelectorAll('input').value,
            id: this.maxId++

        }


        if (name === 'table1') {
            this.setState(({table1}) => {
                const newArr = [...table1, newItem];
                
                return {
                    table1: newArr,
                }
            });
        } else if (name === 'table2') {
            this.setState(({table2}) => {
                const newArr = [...table2, newItem];
                
                return {
                    table2: newArr,
                }
            });
        }
       
    }


    calculate = () => {
        let table1X = [],
            table1Y = [],
            table2X = [],
            table2Y = [],
            table3 = [];
      

        const table1Input1 = document.querySelectorAll('.table1-list-input1'),
              table1Input1Len = table1Input1.length,
              table1Input2 = document.querySelectorAll('.table1-list-input2'),
              table1Input2Len = table1Input2.length,
              table2Input1 = document.querySelectorAll('.table2-list-input1'),
              table2Input1Len = table2Input1.length,
              table2Input2 = document.querySelectorAll('.table2-list-input2'),
              table2Input2Len = table2Input2.length;

        for(let i = 0; i < table1Input1Len; i++) {
            let val = table1Input1[i].value;
            table1X = table1X.concat(val);
        }
        for(let i = 0; i < table1Input2Len; i++) {
            let val = table1Input2[i].value;
            table1Y = table1Y.concat(val);
        }
        for(let i = 0; i < table2Input1Len; i++) {
            let val = table2Input1[i].value;
            table2X = table2X.concat(val);
        }
        for(let i = 0; i < table2Input2Len; i++) {
            let val = table2Input2[i].value;
            table2Y = table2Y.concat(val);
        }
        
        const tableX = table1X.map((item, i) => {
            const sum = (+table1X[i] + +table2X[i]) / 2;
            return sum
        })
        const tableY = table1Y.map((item, i) => {
            const sum = (+table1Y[i] + +table2Y[i]) / 2;
            return sum
        })

        const table = tableX.map((item, i) => {
            return {input1: tableX[i], input2: tableY[i]}
            
        })

        const min = Math.min(table1X.length, table2X.length)
        
        for (let i = 0; i < min; i++) {
            let ob = table[i]
            table3 = table3.concat(ob)
        
        }
        
        this.setState({
            table3: table3
        })




    



    }

    render() {
        const {table1, table2, table3} = this.state;

        return(

            <div className='table-gn'>
            <div className='table1'>
                <table>
                    <tbody>
                        <tr>
                            <td>X</td>
                            <td>Y</td>
                            <td></td>
                        </tr>
                
                        {table1.map((item, i) => (
                            <Table1 key={item.id} input1={item.input1} input2={item.input2} id={item.id} i={i} deleteItem={this.deleteItem}/>
                        ))}

                    </tbody>
                </table>
                <button name='table1' onClick={(e) => this.addItem(e.target.name)}  className='table1-btn'>ADD</button>
            </div>


            <div className='table2'>
                <table>
                    <tbody>
                        <tr>
                            <td>X</td>
                            <td>Y</td>
                            <td></td>
                        </tr>
                
                        {table2.map((item, i) => (
                            <Table2 key={item.id} input1={item.input1} input2={item.input2} i={i} id={item.id} deleteItem={this.deleteItem}/>
                        ))}

                    </tbody>
                </table>
                <button name='table2' onClick={(e) => this.addItem(e.target.name)}  className='table1-btn'>ADD</button>
            </div>

            <div className='table3'>
                <table>
                    <tbody>
                        <tr>
                            <td>X</td>
                            <td>Y</td>
                        </tr>
                
                        {table3.map(item => (
                            <Table3 key={item.id} input1={item.input1} input2={item.input2} id={item.id}/>
                        ))}

                    </tbody>
                </table>
                <button name='table3' onClick={this.calculate}   className='table1-btn'>Calculate</button>
            </div>

            
            
            </div>
            
        )
    }
}


export default App;