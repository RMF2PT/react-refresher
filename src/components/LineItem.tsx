import { FaTrashAlt } from "react-icons/fa";
import { ItemType } from "../App";

type LineItemProps = {
  item: ItemType;
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
};

const LineItem = ({ item, handleCheck, handleDelete }: LineItemProps) => {
  return (
    <li className="item">
      <input
        id={item.id.toString()}
        type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label
        htmlFor={item.id.toString()}
        onDoubleClick={() => handleCheck(item.id)}
        className={item.checked ? "checked" : ""}
      >
        {item.name}
      </label>
      <FaTrashAlt
        role="button"
        aria-label={`Delete ${item.name}`}
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
      />
    </li>
  );
};
export default LineItem;
