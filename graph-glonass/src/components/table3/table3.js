
import './table3.css';


const Table3 = (props) =>  {
    const {input1, input2, id} = props;
    return(
            
                <tr >
                    <td ><input type="text" className="table1-list-input" value={input1} /></td>
                    <td ><input type="text" className="table1-list-input" value={input2} /></td>   
               </tr>            
                
        )
}

export default Table3;