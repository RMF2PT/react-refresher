import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

type AddItemProps = {
  newItem: string;
  setNewItem: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const AddItem = ({ newItem, setNewItem, handleSubmit }: AddItemProps) => {
  // InputRef is used to focus on the input field when the button is clicked
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        autoFocus
        // InputRef is used to focus on the input field when the button is clicked
        ref={inputRef}
        type="text"
        id="addItem"
        placeholder="Add item"
        required
        // This two next lines makes a controlled input field - the value of state is one source of truth
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        // InputRef is used to focus on the input field when the button is clicked
        onClick={() => inputRef.current?.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};
export default AddItem;
