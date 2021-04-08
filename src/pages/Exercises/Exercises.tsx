import React, { useState, useEffect } from "react";
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { filterOutline } from "ionicons/icons";
import BottomNavigation from "../../components/BottomNavigation";
import backend from "../../api";

import "./Exercises.css";
import ExerciseCard from "./ExerciseCard";

interface exerciseInfo {
  category: string[];
  images: string[];
  _id: string;
  title: string;
  description: any;
  bodyPart: any;
  equipment: string;
}

const Exercises: React.FC = () => {
  const [exercises, setExercises] = useState<exerciseInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get<exerciseInfo[]>("/api/exercises");
      setExercises(request.data);
      setIsLoading(false);
      return request;
    }
    fetchData();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="ion-no-padding ion-no-margin">
          <IonTitle>LOGO</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonTitle>Exercises</IonTitle>
          <IonButtons slot="end">
            <IonButton>
              <IonIcon icon={filterOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {isLoading && (
          <IonSpinner className="position-center" name="crescent" />
        )}
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise._id}
            _id={exercise._id}
            title={exercise.title}
            image={exercise.images[0]}
            bodyPart={exercise.bodyPart}
            equipment={exercise.equipment}
          />
        ))}
      </IonContent>
      <BottomNavigation />
    </IonPage>
  );
};

export default Exercises;
