import { useEffect } from "react";
import Button from "./Button";
import "./Dialog.scss";
// import {DialogTypes} from '../../enums/testEnums'

interface IDialog {
  isOpen: boolean;
  type?: boolean;
  text: string;
  onClose: () => void;
}

export default function Dialog({ isOpen, type, text, onClose }: IDialog) {
  const onKeydown = ({ key }: KeyboardEvent) => {
    switch (key) {
      case "Escape":
        onClose();
        break;
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => document.removeEventListener("keydown", onKeydown);
  });

  if (!isOpen) return null;

  return (
    <div className="Dialog">
      <div className="Dialog-Content">
        <p className="Dialog-Text">{text}</p>
        <Button title="Ок" onClick={onClose} />
      </div>
    </div>
  );
}
