import React from "react";
import {
  // IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import BottomNavigation from "../components/BottomNavigation";
import "./Home.css";

const Home = () => {
  return (
    <IonPage>
      <IonHeader className="ion-padding">
        <IonToolbar>
          <IonTitle>Workout Library</IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* <IonContent fullscreen></IonContent> */}
      <BottomNavigation />
    </IonPage>
  );
};

export default Home;
