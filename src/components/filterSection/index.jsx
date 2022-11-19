import { ButtonTwo } from "../button";

function Filter({ filterEntry, filterRemove, filterAll }) {
  return (
    <div>
      <h2>Resumo financeiro</h2>
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
  );
}

export default Filter;
