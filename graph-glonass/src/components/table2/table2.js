import "./table2.css";

const Table2 = (props) => {
  const { input1, input2, deleteItem, id, i } = props;
  return (
    <tr key={id}>
      <td>
        <input
          id={i}
          type="number"
          className="table2-list-input1"
          defaultValue={input1}
        />
      </td>
      <td>
        <input
          id={i}
          type="number"
          className="table2-list-input2"
          defaultValue={input2}
        />
      </td>
      <td>
        <button
          name="table2"
          onClick={(e) => deleteItem(id, e.target.name)}
          className="table1-list-btn"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Table2;
