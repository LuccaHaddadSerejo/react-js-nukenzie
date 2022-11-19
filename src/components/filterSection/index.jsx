import { ButtonTwo } from "../button";
import "./style.css";

function Filter({ filterEntry, filterRemove, filterAll }) {
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
        <ButtonTwo onClick={() => filterRemove()} type={"button"}>
          Despesas
        </ButtonTwo>
      </div>
    </div>
  );
}

export default Filter;
