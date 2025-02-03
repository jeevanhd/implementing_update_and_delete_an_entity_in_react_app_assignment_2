import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(`https://${import.meta.env.VITE_API_URI}/doors`);
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://${import.meta.env.VITE_API_URI}/doors/${id}`);
      setItems(prevItems => prevItems.filter(item => item.id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <div>
      {items.map(item => (
        <Item key={item.id} item={item} setItems={setItems} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ItemList;
