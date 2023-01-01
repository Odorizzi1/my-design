// import { useEffect } from "react"

import Button from "../components/Button"

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
                        {title}
                    </div>
                    <div className="modal-content">
                        {close ? <button className="modal-close" onClick={() => setIsOpen(false)} /> : null}
                        {children}
                    </div>
                    <div className="modal-button__ok">
                        <Button
                            className={"modal-button--ok__style"}
                            label="Ok"
                        />
                    </div>

                </div>
            </div>
        </>
    )
}
export default ModalEditable;