import Button from "../button";

function Filter({ filterEntry, filterRemove, filterAll }) {
  return (
    <div>
      <h2>Resumo financeiro</h2>
      <Button onClick={() => filterAll()} type={"button"}>
        Todos
      </Button>
      <Button onClick={() => filterEntry()} type={"button"}>
        Entradas
      </Button>
      <Button onClick={() => filterRemove()} type={"button"}>
        Despesas
      </Button>
    </div>
  );
}

export default Filter;
