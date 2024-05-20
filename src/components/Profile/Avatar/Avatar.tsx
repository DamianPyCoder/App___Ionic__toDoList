import { IonAvatar, IonText } from "@ionic/react";
import { useUser } from "../../../hooks";
import "./Avatar.scss";

export function Avatar() {
  const { username, avatar } = useUser();

  return (
    <div className="avatar-container">
      <IonAvatar>
        <img src={avatar} />
      </IonAvatar>

      <IonText color="dark">{username}</IonText>
    </div>
  );
}
