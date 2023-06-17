import { Icon } from "../../atoms/Icon";
import check from "../../../assets/check.svg";
import trash from "../../../assets/trash.svg";
import "./style.css";

export const ItemToDoList = ({ items, handleDeleteItem, handleToggleItem }) => {
  return (
    <div className="containerItemsToDoList">
      {items.map((item) => (
        <div
          key={item.id}
          className={`itemToDoListDefault itemToDoList${
            item.isChecked ? "Checked" : "Unchecked "
          }`}
        >
          <p>{item.name}</p>
          <div className="icons">
            <button
              className="iconCheckAndDeleteButton"
              onClick={() => handleToggleItem(item.id)}
            >
              <Icon src={check} />
            </button>
            <button
              className="iconCheckAndDeleteButton"
              onClick={() => handleDeleteItem(item.id)}
            >
              <Icon src={trash} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
