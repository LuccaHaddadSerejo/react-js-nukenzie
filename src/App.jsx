import { useState } from "react";
import "./App.css";
import Aside from "./components/aside";
import FinanceList from "./components/mainList";
import ItemCard from "./components/card";
import Filter from "./components/filterSection";
import TotalMoney from "./components/total";

function App() {
  const [financeResume, setFinanceResume] = useState([]);
  const [financeResumeFilter, setFinanceResumeFilter] = useState([]);

  function addItem(newItem) {
    setFinanceResume([...financeResume, newItem]);
    setFinanceResumeFilter([...financeResumeFilter, newItem]);
  }

  function removeItem(itemToRemove) {
    const items = financeResume.filter((elt) => elt.name !== itemToRemove.name);
    const itemsFilter = financeResumeFilter.filter(
      (elt) => elt.name !== itemToRemove.name
    );

    setFinanceResume(items);
    setFinanceResumeFilter(itemsFilter);
  }

  function filterAll() {
    setFinanceResume(financeResumeFilter);
  }

  function filterItemEntry() {
    const items = financeResumeFilter.filter((elt) => elt.type === "entrada");

    setFinanceResume(items);
  }

  function filterItemLeft() {
    const items = financeResumeFilter.filter((elt) => elt.type === "saida");

    setFinanceResume(items);
  }

  function getTotalMoney() {
    const total = financeResumeFilter
      .map((elt) => {
        return Number(elt.value);
      })
      .reduce((acc, value) => acc + value, 0);

    return total;
  }

  const total = getTotalMoney();

  return (
    <div className="App">
      <div>
        <div>
          <Aside addItem={addItem}></Aside>
        </div>
        <div>
          <TotalMoney value={total}></TotalMoney>
        </div>
      </div>
      <div>
        <Filter
          filterEntry={filterItemEntry}
          filterRemove={filterItemLeft}
          filterAll={filterAll}
        ></Filter>
        <FinanceList>
          {financeResume.map((elt, index) => {
            return (
              <ItemCard
                key={index}
                item={elt}
                removeItem={removeItem}
              ></ItemCard>
            );
          })}
        </FinanceList>
      </div>
    </div>
  );
}
export default App;
