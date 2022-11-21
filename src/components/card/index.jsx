import emptyCard from "../../assets/img/NoCard.svg";
import trash from "../../assets/img/trash.svg";
import "./style.css";

export function ItemCardFull({ item, removeItem, check }) {
  const type = item.type;
  if (type !== "saida") {
    return (
      <li className="card-full border-left-entry">
        <div className="card-div-one">
          <h3 className="card-title">{item.name}</h3>
          <span className="card-type">Entrada</span>
        </div>
        <div className="card-div-two">
          <span className="card-span">R$ {item.value}</span>
          <button className="card-delete-btn" onClick={() => removeItem(item)}>
            <img src={trash} alt="" />
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
          <button className="card-delete-btn" onClick={() => removeItem(item)}>
            <img src={trash} alt="" />
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
