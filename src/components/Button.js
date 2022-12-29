import React from "react"
import Icons from "./Icons";

const Button = ({ onClick, label }) => {
  return (
    <>

      <button
        className="add-button button-hover"
        onClick={onClick}>
        <div style={{ width: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Icons
            icon="add_circle"
          />
          {label}
        </div>
      </button>

    </>
  )
}
export default Button;