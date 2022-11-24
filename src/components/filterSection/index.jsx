import { ButtonTwo } from "../button";
import "./style.css";

function Filter({ setList, allFilteredItems, filterItem }) {
  function filterAll() {
    setList(allFilteredItems);
  }

  function filterEntry() {
    const items = allFilteredItems.filter((elt) => elt.type === "entrada");

    filterItem(items);
  }

  function filterLeft() {
    const items = allFilteredItems.filter((elt) => elt.type === "saida");

    filterItem(items);
  }

  return (
    <div className="filter">
      <h2 className="filter-title">Resumo financeiro</h2>
      <div className="filter-div">
        <ButtonTwo onClick={() => filterAll()} type={"button"}>
          Todos
        </ButtonTwo>
        <ButtonTwo onClick={() => filterEntry()} type={"button"}>
          Entradas
        </ButtonTwo>
        <ButtonTwo onClick={() => filterLeft()} type={"button"}>
          Despesas
        </ButtonTwo>
      </div>
    </div>
  );
}

export default Filter;
