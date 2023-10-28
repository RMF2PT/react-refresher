import { useState } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";

export type ItemType = {
  id: number;
  checked: boolean;
  name: string;
};

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, name: "Item 1" },
    { id: 2, checked: false, name: "Item 2" },
    { id: 3, checked: false, name: "Item 3" },
  ] as ItemType[]);
  const [newItem, setNewItem] = useState("");

  const saveList = (listItems: ItemType[]) => {
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const addItem = (item: string) => {
    // Create new id for the item
    const id: number = Math.floor(Math.random() * 10000) + 1;
    // Create new item object
    const newItemInput = { id, checked: false, name: item } as ItemType;
    // Create new array with the new item
    const listItems = [...items, newItemInput];
    saveList(listItems);
  };

  const handleCheck = (id: number) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    saveList(listItems);
  };

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    saveList(listItems);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if new item is blank
    if (!newItem) return;
    // Creates new item and adds to the list
    addItem(newItem);
  };

  return (
    <>
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </>
  );
}

export default App;
