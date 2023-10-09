import "./Table.css";
import { FaPen, FaTrash } from "react-icons/fa";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.ID}>
            <td>{item.ID}</td>
            <td>{item.Category}</td>
            <td>{item.Name}</td>
            <td>{item.Quantity}</td>
            <td>
              {item.Price.toLocaleString("en-US", {
                style: "currency",
                currency: "GRN",
              })}
            </td>
            <td>
              <button className="btn-table">
                <FaPen className="icon-table" />
              </button>
              <button className="btn-table">
                <FaTrash className="icon-table" />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;