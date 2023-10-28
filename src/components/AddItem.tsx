import { FaPlus } from "react-icons/fa";

type AddItemProps = {
  newItem: string;
  setNewItem: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const AddItem = ({ newItem, setNewItem, handleSubmit }: AddItemProps) => {
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        autoFocus
        id="addItem"
        placeholder="Add item"
        required
        // This two next lines makes a controlled input field - the value of state is one source of truth
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button type="submit" aria-label="Add Item">
        <FaPlus />
      </button>
    </form>
  );
};
export default AddItem;
