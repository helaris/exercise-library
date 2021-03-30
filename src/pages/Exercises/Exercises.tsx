import { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import BottomNavigation from "../../components/BottomNavigation";
import backend from "../../api";

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

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get<exerciseInfo[]>("/api/exercises");
      setExercises(request.data);
      console.log(request.data);
      return request;
    }
    fetchData();
  }, []);

  console.log(exercises);

  return (
    <IonPage>
      <IonHeader className="ion-padding">
        <IonToolbar>
          <IonTitle>Exercises</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
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
