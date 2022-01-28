import cn from "clsx";
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
  return (
    <div className={cn("Dialog", { Dialog_closed: !isOpen })}>
      <p className="Dialog-Text">{text}</p>
      <Button title="Ок" onClick={onClose} />
    </div>
  );
}
