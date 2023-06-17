import "./style.css";
import { Icon } from "../../atoms/Icon";
import { useNavigate } from "react-router-dom";
import trashBlack from "../../../assets/trashBlack.svg";

export const CardList = ({
  id,
  title,
  qtdTaskCompleted,
  qtdTaskIncompleted,
  handleDeleteToDoList,
}) => {
  const navigate = useNavigate();
  function handleRedirectToDetail() {
    navigate(`/DetailToDoList/${id}`);
  }
  return (
    <>
      <div className="containerCardList">
        <div className="borderLeftRed" />
        <div className="contentCardList">
          <div
            className="titleAndNumberCardList"
            onClick={handleRedirectToDetail}
          >
            <h3>{title}</h3>
            <p>Tarefas feitas: {qtdTaskCompleted}</p>
            <p>Tarefas para fazer: {qtdTaskIncompleted}</p>
          </div>
          <div className="buttonTrashCardList">
            <button onClick={() => handleDeleteToDoList(id)}>
              <Icon src={trashBlack} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
