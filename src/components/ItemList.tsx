import { ItemType } from "../App";
import LineItem from "./LineItem";

type ItemListProps = {
  items: ItemType[];
  handleCheck: (id: number) => void;
  handleDelete: (id: number) => void;
};

const ItemList = ({ items, handleCheck, handleDelete }: ItemListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};
export default ItemList;
