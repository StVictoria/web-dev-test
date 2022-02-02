import cn from "clsx";
import Button from "./Button";
import "./Dialog.scss";
import { DialogTypes } from "../../enums/testEnums";

interface IDialog {
  isOpen: boolean;
  type?: string;
  text: string;
  onClose: () => void;
}

export default function Dialog({ isOpen, type, text, onClose }: IDialog) {

  if (!isOpen) return null;

  return (
    <div className="Dialog">
      <div
        className={cn(
          "Dialog-Content",
          { "Dialog-Content_error": type === DialogTypes.ERROR },
          { "Dialog-Content_warn": type === DialogTypes.WARNING },
          { "Dialog-Content_success": type === DialogTypes.SUCCESS }
        )}
      >
        <p className="Dialog-Text">{text}</p>
        <Button title="Ок" onClick={onClose} />
      </div>
    </div>
  );
}
