function ItemCard({ item, removeItem }) {
  return (
    <li>
      <div>
        <h3>{item.name}</h3>
        <span>{item.type}</span>
      </div>
      <div>
        <span>{item.value}</span>
        <button onClick={() => removeItem(item)}>X</button>
      </div>
    </li>
  );
}

export default ItemCard;
