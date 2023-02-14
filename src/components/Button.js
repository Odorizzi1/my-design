import React from "react"
import Icons from "./Icons";

const Button = ({ onClick, label, leftIcon,className,disabled }) => {
  return (
    <>

      <button
        disabled = {disabled}
        className="add-button button-hover"
        onClick={onClick}>
        <div className={className}>
          {leftIcon ? 
          <Icons
            icon={leftIcon}
          /> : undefined
          
        }
          {label}
        </div>
      </button>

    </>
  )
}
export default Button;