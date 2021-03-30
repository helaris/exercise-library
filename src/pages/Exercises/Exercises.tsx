import { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSpinner,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import BottomNavigation from "../../components/BottomNavigation";
import backend from "../../api";

import "./Exercises.css";

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
        <IonList>
          {exercises.map((exercise) => (
            <IonItem
              key={exercise._id}
              routerLink={`/exercise/${exercise._id}`}
            >
              <IonLabel>{exercise.title}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
      <BottomNavigation />
    </IonPage>
  );
};

export default Exercises;
