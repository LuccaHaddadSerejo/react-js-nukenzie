import emptyCard from "../../assets/img/NoCard.svg";
import trash from "../../assets/img/trash.svg";
import "./style.css";

export function ItemCardFull({
  item,
  removeItem,
  removeItemFilter,
  allItems,
  allFilteredItems,
  emptyList,
}) {
  const type = item.type;

  function handleRemove(itemToRemove) {
    const items = allItems.filter((elt) => elt.name !== itemToRemove.name);
    const itemsFilter = allFilteredItems.filter(
      (elt) => elt.name !== itemToRemove.name
    );

    itemsFilter.length === 0 ? emptyList(true) : emptyList(false);

    removeItem(items);
    removeItemFilter(itemsFilter);
  }

  if (type !== "saida") {
    return (
      <li className="card-full border-left-entry">
        <div className="card-div-one">
          <h3 className="card-title">{item.name}</h3>
          <span className="card-type">Entrada</span>
        </div>
        <div className="card-div-two">
          <span className="card-span">R$ {item.value}</span>
          <button
            className="card-delete-btn"
            onClick={() => handleRemove(item)}
          >
            <img src={trash} alt="Ícone de lixeira" />
          </button>
        </div>
      </li>
    );
  } else {
    return (
      <li className="card-full border-left-out">
        <div className="card-div-one">
          <h3 className="card-title">{item.name}</h3>
          <span className="card-type">Despesa</span>
        </div>
        <div className="card-div-two">
          <span className="card-span">R$ {item.value}</span>
          <button
            className="card-delete-btn"
            onClick={() => handleRemove(item)}
          >
            <img src={trash} alt="Ícone de lixeira" />
          </button>
        </div>
      </li>
    );
  }
}

export function ItemCardEmpty() {
  return (
    <li className="card-empty">
      <img className="img-list" src={emptyCard} alt="Card Vazio" />
    </li>
  );
}
