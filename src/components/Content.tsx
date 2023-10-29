import { ItemType } from "../App";
import ItemList from "./ItemList";

type ContentProps = {
  items: ItemType[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
};

const Content = ({ items, handleCheck, handleDelete }: ContentProps) => {
  return (
    <>
      {items.length === 0 ? (
        <p className="empty">No items in the list</p>
      ) : (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      )}
    </>
  );
};
export default Content;
