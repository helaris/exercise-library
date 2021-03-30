import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import backend from "../../../api";
import {
  IonBackButton,
  IonContent,
  IonHeader,
  IonButtons,
  IonPage,
  IonTitle,
  IonToolbar,
  IonImg,
  IonSpinner,
} from "@ionic/react";

import "../Exercises.css";

interface exerciseInfo {
  category: string[];
  images: string[];
  _id: string;
  id: string;
  title: string;
  description: any;
  bodyPart: any;
  equipment: string;
}

const ExerciseDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [exercise, setExercise] = useState<exerciseInfo>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get<exerciseInfo>(`/api/exercises/${id}`);
      setExercise(request.data);
      setIsLoading(false);
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
      <IonContent>
        {isLoading && <IonSpinner name="dots" className="position-center" />}
        {exercise?.images.map((i) => (
          <IonImg key={i} src={i} alt={exercise?.title} />
        ))}
        {typeof exercise?.description === "string" ? (
          <p className="ion-padding">{exercise?.description}</p>
        ) : (
          exercise?.description.map((e: any) => (
            <section className="ion-padding">
              <h3>{e?.title}</h3>
              <p>{e?.description}</p>
            </section>
          ))
        )}
      </IonContent>
    </IonPage>
  );
};

export default ExerciseDetail;
