import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Modal from "react-modal";
import "./style.css";
import { ContentCreateToDoList } from "../../components/organisms/ContentCreateToDoList";
import { Icon } from "../../components/atoms/Icon";
import { CardTask } from "../../components/molecules/CardTask";
import cancel from "../../assets/cancel.svg";
import { Input } from "../../components/atoms/Input";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    width: "600px",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "10px",
    padding: "20px 50px",
  },
};

export const MultipleToDoList = () => {
  const [dataModal, setDataModal] = useState({
    title: "",
    items: [],
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [listsToDo, setListsToDo] = useState(
    JSON.parse(localStorage.getItem("listsToDo") || "[]")
  );

  useEffect(() => {
    setDataModal({
      title: "",
      items: [],
    });
  }, [modalIsOpen]);

  function handleSaveTodoList() {
    const copyList = [...listsToDo];
    copyList.push({ ...dataModal, id: uuidv4() });
    localStorage.setItem("listsToDo", JSON.stringify(copyList));
    setListsToDo(copyList);
    setModalIsOpen(false);
  }

  function handleDeleteToDoList(id) {
    setListsToDo((prev) => prev.filter((list) => list.id !== id));
  }

  function openModal() {
    setModalIsOpen(true);
  }

  function closeModal() {
    setModalIsOpen(false);
  }

  function handleChangeTitle(e) {
    setDataModal((prev) => ({ ...prev, title: e.target.value }));
  }

  return (
    <>
      <header>
        <button onClick={openModal} className="createListButton">
          Criar Lista
        </button>
      </header>

      <div className="containerCardMultipleList">
        {listsToDo.map((list) => (
          <CardTask
            id={list.id}
            title={list.title}
            qtdTaskCompleted={
              list.items.filter((list) => list.isChecked).length
            }
            qtdTaskIncompleted={
              list.items.filter((list) => !list.isChecked).length
            }
            handleDeleteToDoList={handleDeleteToDoList}
            key={list.id}
          />
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="headerModal">
          <h1 className="titleCreateListModal">Crie sua lista de tarefas:</h1>
          <button className="iconCancelButton" onClick={closeModal}>
            <Icon src={cancel} />
          </button>
        </div>
        <Input
          value={dataModal.title}
          onChange={handleChangeTitle}
          type="text"
          placeholder="Insira o título da sua lista"
          id="inputTitleList"
        />
        <div className="containerContentCreateToDoList">
          <ContentCreateToDoList
            dataModal={dataModal}
            setDataModal={setDataModal}
          />
        </div>
        <button className="buttonSaveList" onClick={handleSaveTodoList}>
          Salvar lista
        </button>
      </Modal>
    </>
  );
};
