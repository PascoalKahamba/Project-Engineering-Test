import React from "react";
import { Button, ModalDelete, ModalSection } from "../styles/GlobalStyles";
import { userInformationProps } from "./Home";

interface ModalProps {
  id: number;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUserInformation: React.Dispatch<
    React.SetStateAction<userInformationProps[]>
  >;
}

type FunDeleteAndCanlcel =
  | React.MouseEventHandler<HTMLButtonElement>
  | undefined;

const Modal = ({ setModal, setUserInformation, id }: ModalProps) => {
  const funDelete: FunDeleteAndCanlcel = () => {
    setUserInformation((userInformation) =>
      userInformation.filter((user) => user.id !== id)
    );
    setModal(false);
    window.document.body.classList.remove("opacity");
  };

  const funCancel: FunDeleteAndCanlcel = () => {
    setModal(false);
    window.document.body.classList.remove("opacity");
  };

  return (
    <ModalSection>
      <ModalDelete>
        <p>Are you sure you want to delete this item?</p>
        <div className="buttons">
          <Button
            backgroundColor="#fff"
            color="#000"
            onClick={funCancel}
            border="2px solid #DDDD"
          >
            Cancel
          </Button>
          <Button
            backgroundColor="#FF5151"
            color="#fff"
            onClick={funDelete}
            border="2px solid #FF5151"
          >
            Delete
          </Button>
        </div>
      </ModalDelete>
    </ModalSection>
  );
};

export default Modal;
