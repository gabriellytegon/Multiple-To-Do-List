import { useState } from "react";
import { ContentCreateToDoList } from "../../components/organisms/ContentCreateToDoList";
import "./style.css";
import { useParams, useNavigate } from "react-router-dom";
import { Input } from "../../components/atoms/Input";

export const DetailToDoList = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const allList = JSON.parse(localStorage.getItem("listsToDo") || "[]");
  const list = allList.find((item) => item.id == id);
  const [dataModal, setDataModal] = useState(list);

  function handleEditToDoList() {
    const indexToEdit = allList.findIndex((list) => list.id == id);
    const copyAllLists = [...allList];
    copyAllLists[indexToEdit] = dataModal;
    localStorage.setItem("listsToDo", JSON.stringify(copyAllLists));
    navigate("/MultipleToDoList");
  }

  function handleChangeTitle(e) {
    setDataModal((prev) => ({ ...prev, title: e.target.value }));
  }

  return (
    <div className="containerGeneralDetailToDoList">
      <div className="containerDetailToDoList">
        <h1 className="title">Lista de tarefas</h1>
        <Input
          value={dataModal.title}
          onChange={handleChangeTitle}
          type="text"
          placeholder="Insira o título da sua lista"
          id="inputTitleList"
        />

        <ContentCreateToDoList
          dataModal={dataModal}
          setDataModal={setDataModal}
        />
      </div>
      <button className="buttonSaveList" onClick={handleEditToDoList}>
        Salvar lista
      </button>
    </div>
  );
};
