// import React, { useState } from "react";
// import Modal from "../pages/Modal";

// import ButtonIcon from "./ButtonIcon";


// const CardSelector = ({ titleTask, onClickDelete, onClickEdit, titleModal, infoCard }) => {
//   const [modalOpen, setModalOpen] = useState(false)
//   return (
//     <>
//       <Modal
//         show={modalOpen}
//         closeModal={() => setModalOpen(false)}
//         children={infoCard}
//       >
      
//       </Modal>
//       <div className="content-insert__itens">
//         <span style={{ marginLeft: "5px", display: "flex", alignItems: "center", fontSize: "15px" }}>{titleTask}</span>
//         <div className="content-insert__itens--buton_icon">

//           <ButtonIcon
//             icon="edit"
//             onClick={() => setModalOpen(true)}
//           />
//           <ButtonIcon
//             icon="delete"
//             onClick={onClickDelete}
//           />

//         </div>
//       </div>

//     </>
//   )
// }
// export default CardSelector;