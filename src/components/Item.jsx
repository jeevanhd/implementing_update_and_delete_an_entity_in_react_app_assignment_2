import axios from "axios";

const Item = ({ item, setItems }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(
        `https://${import.meta.env.VITE_API_URI}/doors/${item.id}`
      );
      setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  const handleEdit = async () => {
    // Logic for editing the item (e.g., open a modal or navigate to an edit page)
    try {
      const newData = {
        ...Item,
      };
      const response = await axios.put(
        `http://${import.meta.env.VITE_API_URI}/doors/${newData.id}`,
        newData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="item">
      <h2>{item.name}</h2>
      <button onClick={handleEdit}>Edit</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Item;
