import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backend from "../../../api";
import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonButtons,
  // IonItem,
  // IonLabel,
  // IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  // IonToolbar,
} from "@ionic/react";

interface exerciseInfo {
  category: string[];
  images: string[];
  _id: string;
  title: string;
  description: any;
  bodyPart: any;
  equipment: string;
}

const ExerciseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [exercise, setExercise] = useState<exerciseInfo>();

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get<exerciseInfo>(`/api/exercises/${id}`);
      setExercise(request.data);
      return request;
    }
    fetchData();
  }, [id]);

  return (
    <IonPage>
      <IonHeader className="ion-padding">
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/exercises" />
          </IonButtons>
          <IonTitle>{exercise?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default ExerciseDetail;
