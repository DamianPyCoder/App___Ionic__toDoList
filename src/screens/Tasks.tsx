import { IonPage, IonContent } from "@ionic/react";
import { Header } from "../components";
import { ListTasks } from "../components/Task";

export function Tasks() {
  return (
    <IonPage>
      <Header />

      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Lista de tareas</IonTitle>
          </IonToolbar>
        </IonHeader> */}

        <IonContent>
          <ListTasks />
        </IonContent>
      </IonContent>
    </IonPage>
  );
}
