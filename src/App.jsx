import axios from "axios";
import { useEffect, useState } from "react";
import ItemList from "./components/ItemList";

// use the following link to get the data
// `/doors` will give you all the doors.
const API_URI = `https://${import.meta.env.VITE_API_URI}/doors`;

function App() {
  // Get the existing item from the server
  // pass the item to UpdateItem as a prop
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URI);

        setItems(response.data);

        if (response.length > 0) {
          setItem(response.data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <ItemList item={item} items={items} setItems={setItems} />;
}

export default App;
