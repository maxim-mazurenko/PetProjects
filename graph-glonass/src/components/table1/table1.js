
import './table1.css';


const Table1 = (props) =>  {
    const {input1, input2, deleteItem, id} = props;
    return(
            
                <tr key={id} >
                    <td><input type="number" className="table1-list-input1" defaultValue={input1} /></td>
                    <td><input  type="number" className="table1-list-input2" defaultValue={input2} /></td>   
                    <td><button name='table1'  onClick={(e) => deleteItem(id, e.target.name)} className="table1-list-btn">Delete</button></td>  
               </tr>            
                
        )
}

export default Table1;