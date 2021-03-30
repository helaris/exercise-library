import React from "react";
import { IonTabButton, IonLabel, IonTabBar, IonIcon } from "@ionic/react";

import { documentTextOutline, checkboxOutline } from "ionicons/icons";

const BottomNavigation: React.FC = () => (
  <IonTabBar slot="bottom" className="ion-padding">
    <IonTabButton tab="workouts" href="/workouts">
      <IonIcon color="secondary" size="large" icon={documentTextOutline} />
      <IonLabel color="secondary">Workouts</IonLabel>
    </IonTabButton>
    <IonTabButton tab="exercises" href="/exercises">
      <IonIcon color="secondary" size="large" icon={checkboxOutline} />
      <IonLabel color="secondary">Exercises</IonLabel>
    </IonTabButton>
  </IonTabBar>
);

export default BottomNavigation;
