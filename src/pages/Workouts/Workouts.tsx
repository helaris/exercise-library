import {
  // IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import BottomNavigation from "../../components/BottomNavigation";

const Workouts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-padding">
        <IonToolbar>
          <IonTitle>Workouts</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* <IonContent fullscreen></IonContent> */}
      <BottomNavigation />
    </IonPage>
  );
};

export default Workouts;
