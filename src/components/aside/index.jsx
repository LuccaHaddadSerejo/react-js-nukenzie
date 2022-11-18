import { useState } from "react";
import Button from "../button";
import Input from "../input";
import Label from "../label";
import Select from "../select";

function Aside({ addItem }) {
  const [userInputText, setUserInputText] = useState("");
  const [userInputNumber, setUserInputNumber] = useState(0);
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
    <form
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
      <Label name={"select"}>Descrição</Label>
      <Input
        type={"text"}
        value={userInputText}
        name="inputDescription"
        placeholder={"Digite aqui sua descrição"}
        onChange={(event) => setUserInputText(event.target.value)}
      ></Input>
      <div>
        <Label name={"inputValue"}>Valor</Label>
        <Input
          type={"number"}
          value={userInputNumber}
          name="inputValue"
          placeholder={"Digite aqui o valor"}
          onChange={(event) => setUserInputNumber(event.target.value)}
        ></Input>
        <Label name={"select"}>Tipo de valor</Label>
        <Select
          name={"select"}
          value={userInputSelect}
          onChange={(event) => setUserInputSelect(event.target.value)}
        ></Select>
      </div>
      <Button type="submit">Inserir valor</Button>
    </form>
  );
}

export default Aside;
