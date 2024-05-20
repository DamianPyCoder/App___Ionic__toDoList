import { IonIcon } from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import { OptionTypes } from "./Option.types";
import "./Option.scss";

export function Option(props: OptionTypes.Props) {
  const { title, icon, onClick } = props;

  return (
    <div className="option" onClick={onClick}>
      <div>
        <IonIcon icon={icon} />
        <span>{title}</span>
      </div>

      <IonIcon icon={chevronForwardOutline} />
    </div>
  );
}
