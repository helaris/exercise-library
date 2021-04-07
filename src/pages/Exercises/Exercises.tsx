import { useState, useEffect } from "react";
import {
  // IonCard,
  // IonCardHeader,
  // IonCardSubtitle,
  // IonCardTitle,
  // IonCol,
  IonContent,
  // IonGrid,
  IonHeader,
  // IonButton,
  IonPage,
  // IonRow,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
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
      <IonHeader className="ion-padding">
        <IonToolbar>
          <IonTitle>Exercises</IonTitle>
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
