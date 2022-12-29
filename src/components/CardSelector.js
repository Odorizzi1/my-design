import React from "react";
import ButtonIcon from "./ButtonIcon";

const CardSelector = ({ titleTask, onClickDelete, onClickEdit }) => {
  return (
    <>
      <div className="content-insert__itens">
        <span style={{ marginLeft: "5px", display: "flex", alignItems: "center", fontSize: "15px" }}>{titleTask}</span>
        <div className="content-insert__itens--buton_icon">
          
          <ButtonIcon
            icon="edit"
            onClick={onClickEdit}
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