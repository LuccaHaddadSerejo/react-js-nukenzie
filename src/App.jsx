import { useState } from "react";
import "./App.css";
import Aside from "./components/aside";
import FinanceList from "./components/mainList";
import { ItemCardFull, ItemCardEmpty } from "./components/card";
import Filter from "./components/filterSection";
import TotalMoney from "./components/total";
import Header from "./components/header";
import LandingPage from "./components/landingPage";
function App() {
  const [financeResume, setFinanceResume] = useState([]);
  const [financeResumeFilter, setFinanceResumeFilter] = useState([]);
  const [emptyList, setEmptyList] = useState(true);
  const [islandingPage, setisLandingPage] = useState(true);

  function addItem(newItem) {
    setFinanceResume([...financeResume, newItem]);
    setFinanceResumeFilter([...financeResumeFilter, newItem]);
    if (financeResumeFilter === []) {
      setEmptyList(true);
    } else {
      setEmptyList(false);
    }
  }

  function changePageToDashBoard() {
    setisLandingPage(false);
  }

  function changePageToLandingPage() {
    setisLandingPage(true);
  }

  function removeItem(itemToRemove) {
    const items = financeResume.filter((elt) => elt.name !== itemToRemove.name);
    const itemsFilter = financeResumeFilter.filter(
      (elt) => elt.name !== itemToRemove.name
    );
    if (itemsFilter.length === 0) {
      setEmptyList(true);
    } else {
      setEmptyList(false);
    }

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
      {islandingPage === true ? (
        <LandingPage changePage={changePageToDashBoard}></LandingPage>
      ) : (
        <div>
          <Header changePage={changePageToLandingPage}></Header>
          <main className="main container">
            <section className="aside-container">
              <Aside addItem={addItem}></Aside>
              {emptyList === false ? (
                <TotalMoney value={total}></TotalMoney>
              ) : null}
            </section>
            <section className="list-container">
              <Filter
                filterEntry={filterItemEntry}
                filterRemove={filterItemLeft}
                filterAll={filterAll}
              ></Filter>
              {emptyList === false ? (
                <FinanceList>
                  {financeResume.map((elt, index) => {
                    return (
                      <ItemCardFull
                        key={index}
                        item={elt}
                        removeItem={removeItem}
                      ></ItemCardFull>
                    );
                  })}
                </FinanceList>
              ) : (
                <FinanceList>
                  <h2 className="list-title">
                    Você ainda não possui nenhum lançamento
                  </h2>
                  <ItemCardEmpty></ItemCardEmpty>
                  <ItemCardEmpty></ItemCardEmpty>
                  <ItemCardEmpty></ItemCardEmpty>
                </FinanceList>
              )}
            </section>
          </main>
        </div>
      )}
    </div>
  );
}
export default App;
