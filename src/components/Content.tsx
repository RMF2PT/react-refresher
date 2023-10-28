import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

type ItemType = {
  id: number;
  checked: boolean;
  name: string;
};

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, checked: false, name: "Item 1" },
    { id: 2, checked: true, name: "Item 2" },
    { id: 3, checked: false, name: "Item 3" },
  ] as ItemType[]);

  const handleCheck = (id: number) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);

    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length === 0 && <p className="empty">No items in the list</p>}
      <ul>
        {items.map((item) => (
          <li key={item.id} className="item">
            <input
              id={item.id.toString()}
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label
              // htmlFor={item.id.toString()}
              onDoubleClick={() => handleCheck(item.id)}
              className={item.checked ? "checked" : ""}
            >
              {item.name}
            </label>
            <FaTrashAlt
              role="button"
              tabIndex="0"
              onClick={() => handleDelete(item.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Content;
