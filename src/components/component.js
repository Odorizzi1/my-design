import React, { useState } from "react";
import Modal from "react-modal"

Modal.setAppElement('#root')

export const O_Button = ({ onClick, label }) => {
  return (
    <>
      <button
        className="add-button button-hover"
        onClick={onClick}>
        <div style={{ width: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <O_Icon
            icon="add_circle"
          />
          {label}

        </div>
      </button>
    </>
  )
}

export const O_TextField = ({ label, onChange, value }) => {

  return (
    <>
      <div className="textfield--container">
        <input type="text" className="textfield-first" value={value} onChange={(e) => onChange(e.target.value)}></input>
        <span className="textfield--label__style">{label}</span>

      </div>
    </>
  )
}

export const O_CardSelector = ({ titleTask, onClickDelete, onClickEdit }) => {
  return (
    <>
      <div className="content-insert__itens">
        <span style={{ marginLeft: "5px", display: "flex", alignItems: "center", fontSize: "15px" }}>{titleTask}</span>
        <div className="content-insert__itens--buton_icon">
          <O_ButtonIcon
            icon="edit"
            onClick={onClickEdit}
          />
          <O_ButtonIcon
            icon="delete"
            onClick={onClickDelete}

          />
        </div>
      </div>
    </>
  )
}

export const O_ButtonIcon = ({ icon, onClick }) => {
  return (
    <>
      <span onClick={onClick} class="material-symbols-outlined button-icon__style">
        {icon}
      </span>
    </>
  )
}

export const O_Icon = ({ icon }) => {
  return (
    <>
      <span style={{ fontSize: "15px" }} class="material-symbols-outlined">
        {icon}
      </span>
    </>
  )
}

