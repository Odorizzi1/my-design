import React, { useState } from "react";
import ModalEditable from "../pages/modalEditable";
import ButtonIcon from "./ButtonIcon";


const CardSelector = ({ titleTask, onClickDelete, onClickEdit }) => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <>
      <ModalEditable
        isOpen={modalOpen}
        setIsOpen={setModalOpen}
        close
        backDropClose={false}
        title="Update"
      >
        aqui dentro vai haver informação pra caralho aqui dentro vai haver informação pra caralho
        aqui dentro vai haver informação pra caralho aqui dentro vai haver informação pra caralho
        aqui dentro vai haver informação pra caralho aqui dentro vai haver informação pra caralho aqui dentro vai haver informação pra caralho

      </ModalEditable>
      <div className="content-insert__itens">
        <span style={{ marginLeft: "5px", display: "flex", alignItems: "center", fontSize: "15px" }}>{titleTask}</span>
        <div className="content-insert__itens--buton_icon">

          <ButtonIcon
            icon="edit"
            onClick={() => setModalOpen(true)}
          />
          <ButtonIcon
            icon="delete"
            onClick={onClickDelete}
          />

        </div>
      </div>

    </>
  )
}
export default CardSelector;