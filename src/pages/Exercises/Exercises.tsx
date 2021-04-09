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
  IonModal,
} from "@ionic/react";
import { closeOutline, filterOutline } from "ionicons/icons";
import BottomNavigation from "../../components/BottomNavigation";
import backend from "../../api";
import ExerciseCard from "./ExerciseCard";

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
  const [exercisesArr, setExercisesArr] = useState<exerciseInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get<exerciseInfo[]>("/api/exercises");
      setExercisesArr(request.data);
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
            <IonButton onClick={() => setShowModal(!showModal)}>
              <IonIcon icon={filterOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {isLoading && (
          <IonSpinner className="position-center" name="crescent" />
        )}
        {exercisesArr.map((exercise) => (
          <ExerciseCard
            key={exercise._id}
            _id={exercise._id}
            title={exercise.title}
            image={exercise.images[0]}
            bodyPart={exercise.bodyPart}
            equipment={exercise.equipment}
          />
        ))}
        <IonModal isOpen={showModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Filter</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>
                  <IonIcon icon={closeOutline} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <p>Modal</p>
          </IonContent>
        </IonModal>
      </IonContent>
      <BottomNavigation />
    </IonPage>
  );
};

export default Exercises;
