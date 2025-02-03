const Item = ({ item }) => {
  // Render a single item
  // Add a Delete and Edit button
  return (
    <div className="item">
      <h2>{item.name}</h2>
    </div>
  );
};

export default Item;
