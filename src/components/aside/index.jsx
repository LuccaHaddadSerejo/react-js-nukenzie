import { useState } from "react";
import { Button } from "../button";
import Input from "../input";
import Label from "../label";
import Select from "../select";
import "./style.css";

function Aside({ addItem }) {
  const [userInputText, setUserInputText] = useState("");
  const [userInputNumber, setUserInputNumber] = useState(1);
  const [userInputSelect, setUserInputSelect] = useState("entrada");

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

    console.log(obj);
    return obj;
  }

  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(event) =>
          addItem(
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
                ),
            event.preventDefault()
          )
        }
      >
        <div className="input-set-one">
          <Label name={"select"}>Descrição</Label>
          <Input
            type={"text"}
            value={userInputText}
            name="inputDescription"
            placeholder={"Digite aqui sua descrição"}
            onChange={(event) => setUserInputText(event.target.value)}
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
              onChange={(event) => setUserInputNumber(event.target.value)}
            ></Input>
            <span className="form-span-two">R$</span>
          </div>
          <div className="input-set-two">
            <Label name={"select"}>Tipo de valor</Label>
            <Select
              name={"select"}
              value={userInputSelect}
              onChange={(event) => setUserInputSelect(event.target.value)}
            ></Select>
          </div>
        </div>
        <Button type="submit">Inserir valor</Button>
      </form>
    </div>
  );
}

export default Aside;
