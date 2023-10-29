import { useState, useEffect } from "react";
import Header from "./components/Header";
import AddItem from "./components/AddItem";
import SearchItem from "./components/SearchItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import apiRequest from "./apiRequest";

export type ItemType = {
  id: number;
  checked: boolean;
  name: string;
};

function App() {
  const API_URL = "http://localhost:3500/items";

  const [items, setItems] = useState([] as ItemType[]);
  const [newItem, setNewItem] = useState("");
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null as null | string);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw Error("Failed to load database");
        const data = await res.json();
        setItems(data);
        setFetchError(null);
      } catch (error) {
        if (error instanceof Error) setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    // TODO - Remove setTimeout
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);

  const addItem = async (item: string) => {
    // Create new id for the item
    const id: number = Math.floor(Math.random() * 10000) + 1;
    // Create new item object
    const newItemInput = { id, checked: false, name: item } as ItemType;
    // Create new array with the new item
    const listItems = [...items, newItemInput];
    setItems(listItems);
    // Reset the input field
    setNewItem("");
    // Add new item to the database
    // Create options object for the POST request
    const postOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newItemInput),
    };
    // Make the POST request
    const result = await apiRequest({
      url: API_URL,
      optionsObj: postOptions,
    });
    // If the apiRequest returns an error, set the fetch error state
    if (result) setFetchError(result);
  };

  const handleCheck = async (id: number) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    // Update the database
    // Get the item that was checked
    const item = listItems.find((item) => item.id === id) as ItemType;
    // Create options object for the PATCH request and send only the property that was updated
    const patchOptions = {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ checked: item.checked }),
    };
    // Add the id to the url
    const url = `${API_URL}/${id}`;
    // Make the PATCH request
    const result = await apiRequest({
      url: url,
      optionsObj: patchOptions,
    });
    // If the apiRequest returns an error, set the fetch error state
    if (result) setFetchError(result);
  };

  const handleDelete = async (id: number) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    // Delete the item from the database
    // Create options object for the DELETE request
    const deleteOptions = {
      method: "DELETE",
    };
    // Add the id to the url
    const url = `${API_URL}/${id}`;
    // Make the DELETE request
    const result = await apiRequest({
      url: url,
      optionsObj: deleteOptions,
    });
    // If the apiRequest returns an error, set the fetch error state
    if (result) setFetchError(result);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Check if new item is blank
    if (!newItem) return;
    // Creates new item and adds to the list
    addItem(newItem);
  };

  // Filter items based on search
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header title="Groceries List" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem search={search} setSearch={setSearch} />
      <main>
        {isLoading && <p className="loading">Loading...</p>}
        {fetchError && <p className="error">{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && (
          <Content
            items={filteredItems}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        )}
      </main>
      <Footer length={items.length} />
    </>
  );
}

export default App;
