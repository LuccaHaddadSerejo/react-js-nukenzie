import { useState } from "react";
import "./App.css";
import Aside from "./components/aside";
import { ItemCardFull, ItemCardEmpty } from "./components/card";
import Filter from "./components/filterSection";
import TotalSection from "./components/total";
import Header from "./components/header";
import LandingPage from "./components/landingPage";

function App() {
  const [financeResume, setFinanceResume] = useState([]);
  const [financeResumeFilter, setFinanceResumeFilter] = useState([]);
  const [emptyList, setEmptyList] = useState(true);
  const [islandingPage, setisLandingPage] = useState(true);

  function changePageToDashBoard() {
    setisLandingPage(false);
  }

  function changePageToLandingPage() {
    setisLandingPage(true);
  }

  return (
    <div className="App">
      {islandingPage === true ? (
        <LandingPage changePage={changePageToDashBoard}></LandingPage>
      ) : (
        <div>
          <Header changePage={changePageToLandingPage}></Header>
          <main className="main container">
            <section className="aside-container">
              <Aside
                allItems={financeResume}
                allFilteredItems={financeResumeFilter}
                setList={setFinanceResume}
                setFilteredList={setFinanceResumeFilter}
                emptyList={setEmptyList}
              ></Aside>
              {emptyList === false ? (
                <TotalSection allFilteredItems={financeResume}></TotalSection>
              ) : null}
            </section>
            <section className="list-container">
              <Filter
                allFilteredItems={financeResumeFilter}
                setList={setFinanceResume}
                filterItem={setFinanceResume}
              ></Filter>
              {emptyList === false ? (
                <ul className="list-full">
                  {financeResume.map((elt, index) => {
                    return (
                      <ItemCardFull
                        key={index}
                        item={elt}
                        allItems={financeResume}
                        allFilteredItems={financeResumeFilter}
                        removeItem={setFinanceResume}
                        removeItemFilter={setFinanceResumeFilter}
                        emptyList={setEmptyList}
                      ></ItemCardFull>
                    );
                  })}
                </ul>
              ) : (
                <ul className="list-full">
                  <h2 className="list-title">
                    Você ainda não possui nenhum lançamento
                  </h2>
                  <ItemCardEmpty></ItemCardEmpty>
                  <ItemCardEmpty></ItemCardEmpty>
                  <ItemCardEmpty></ItemCardEmpty>
                </ul>
              )}
            </section>
          </main>
        </div>
      )}
    </div>
  );
}
export default App;
