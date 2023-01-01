import React from "react"

const TextField = ({ label, onChange, value, errorText}) => {

  return (
    <>
      <div className="textfield--container">
        <input  type="text" className="textfield-first" value={value} onChange={(e) => onChange(e.target.value)}></input>
        <span className="textfield--label__style">{label}</span>
    {/* <span style={{color:"black"}}>TESTANDO</span> */}
      </div>
    </>
  )
}

export default TextField;