import { ItemToDoList } from "../../molecules/ItemToDoList";
import "./style.css";
import { Input } from "../../atoms/Input";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ContentCreateToDoList = ({ dataModal, setDataModal }) => {
  const [textItem, setTextItem] = useState("");

  function handleAddItem() {
    setDataModal((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          name: textItem,
          id: uuidv4(),
          isChecked: false,
        },
      ],
    }));
    setTextItem("");
  }

  function handleDeleteItem(id) {
    setDataModal((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  }

  function handleChangeTextItem(e) {
    setTextItem(e.target.value);
  }

  function handleToggleItem(id) {
    const indexItemToChange = dataModal.items.findIndex(
      (item) => item.id == id
    );
    const copyDataModal = { ...dataModal };
    copyDataModal.items[indexItemToChange].isChecked =
      !copyDataModal.items[indexItemToChange].isChecked;
    setDataModal(copyDataModal);
  }

  return (
    <>
      <div className="containerAddItem">
        <Input
          value={textItem}
          onChange={handleChangeTextItem}
          placeholder="Insira a tarefa"
        />
        <button className="addItemButton" onClick={handleAddItem}>
          Add
        </button>
      </div>
      <ItemToDoList
        items={dataModal.items}
        handleDeleteItem={handleDeleteItem}
        handleToggleItem={handleToggleItem}
      />
    </>
  );
};
