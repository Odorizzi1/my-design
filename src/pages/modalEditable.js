// import { useEffect } from "react"

const ModalEditable = ({ children, id = "modal", isOpen, setIsOpen, close = true, backDropClose, title }) => {

    if (!isOpen) {
        return null
    }
    const handleBackDropClick = (event) => {
        if (event) {
            event.preventDefault()
        }
        if (!backDropClose || event.target.id != id) {
            return
        } else {
            setIsOpen(false)
        }
    }
    return (
        <>
            <div id={id} className="backdrop" onClick={handleBackDropClick}>
                <div className="modal">
                   <div className="modal-title">
                        <h2> {title}</h2>
                   </div>
                   
                   
                    {close ? <button className="modal-close" onClick={() => setIsOpen(false)} /> : null}
                    {children}
                </div>
            </div>
        </>
    )
}
export default ModalEditable;