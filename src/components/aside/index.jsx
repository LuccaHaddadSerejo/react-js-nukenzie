import { useState } from "react";
import { Button } from "../button";
import Input from "../input";
import Label from "../label";
import Select from "../select";
import "./style.css";

function Aside({
  allItems,
  allFilteredItems,
  setList,
  setFilteredList,
  emptyList,
}) {
  const [userInputText, setUserInputText] = useState("");
  const [userInputNumber, setUserInputNumber] = useState("");
  const [userInputSelect, setUserInputSelect] = useState("entrada");

  function handleChangeText(event) {
    setUserInputText(event.target.value);
  }

  function handleChangeNumber(event) {
    setUserInputNumber(event.target.value);
  }

  function handleChangeSelect(event) {
    setUserInputSelect(event.target.value);
  }

  function handleAdd(newItem) {
    setList(() => [...allItems, newItem]);
    setFilteredList(() => [...allFilteredItems, newItem]);
    setUserInputText("");
    setUserInputNumber("");

    allFilteredItems === [] ? emptyList(true) : emptyList(false);
  }

  function addEntryItemToResumeFinance(description, value, option) {
    const obj = {
      name: description,
      value: value,
      type: option,
    };

    return obj;
  }

  function addOutItemToResumeFinance(description, value, option) {
    const obj = {
      name: description,
      value: -value,
      type: option,
    };

    return obj;
  }

  function submit(event) {
    event.preventDefault();
    handleAdd(
      userInputSelect === "saida"
        ? addOutItemToResumeFinance(
            userInputText,
            userInputNumber,
            userInputSelect
          )
        : addEntryItemToResumeFinance(
            userInputText,
            userInputNumber,
            userInputSelect
          )
    );
  }

  return (
    <div className="form-container">
      <form className="form" onSubmit={submit}>
        <div className="input-set-one">
          <Label name={"select"}>Descrição</Label>
          <Input
            type={"text"}
            value={userInputText}
            name="inputDescription"
            placeholder={"Digite aqui sua descrição"}
            onClick={handleChangeText}
          ></Input>
        </div>
        <span className="form-span">Ex: Compra de roupas</span>
        <div className="form-div">
          <div className="input-set-two">
            <Label name={"inputValue"}>Valor</Label>
            <Input
              type={"number"}
              value={userInputNumber}
              name="inputValue"
              onChange={handleChangeNumber}
            ></Input>
            <span className="form-span-two">R$</span>
          </div>
          <div className="input-set-two">
            <Label name={"select"}>Tipo de valor</Label>
            <Select
              defaultValue={userInputSelect}
              name={"select"}
              onChange={handleChangeSelect}
            ></Select>
          </div>
        </div>
        <Button type="submit">Inserir valor</Button>
      </form>
    </div>
  );
}

export default Aside;
