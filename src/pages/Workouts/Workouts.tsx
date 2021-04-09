import React from "react";
import {
  // IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
// import BottomNavigation from "../../components/BottomNavigation";
import BottomNavigation from "../../components/BottomNavigation";

const Workouts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>LOGO</IonTitle>
        </IonToolbar>
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
