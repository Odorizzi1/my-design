import React from "react"

const ButtonIcon = ({ icon, onClick }) => {
  return (
    <>
      <span onClick={onClick} class="material-symbols-outlined button-icon__style">
        {icon}
      </span>
    </>
  )
}
export default ButtonIcon;