import React from "react";
import { IonTabButton, IonLabel, IonTabBar, IonIcon } from "@ionic/react";

import { documentTextOutline, checkboxOutline } from "ionicons/icons";

const BottomNavigation: React.FC = () => (
  <IonTabBar slot="bottom" className="ion-padding">
    <IonTabButton tab="workouts" href="/workouts">
      <IonIcon size="large" icon={documentTextOutline} />
      <IonLabel>Workouts</IonLabel>
    </IonTabButton>
    <IonTabButton tab="exercises" href="/exercises">
      <IonIcon size="large" icon={checkboxOutline} />
      <IonLabel>Exercises</IonLabel>
    </IonTabButton>
  </IonTabBar>
);

export default BottomNavigation;
