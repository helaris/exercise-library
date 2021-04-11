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
  IonSpinner,
  IonImg,
} from "@ionic/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

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

const ExerciseDetail = () => {
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

  const imgs = exercise?.images.map((i, index) => (
    <IonImg className="ion-padding" key={index} src={i} alt={exercise?.title} />
  ));

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/exercises" />
          </IonButtons>
          <IonTitle>{exercise?.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {isLoading && <IonSpinner name="dots" className="position-center" />}
        {/* {exercise?.images.map((i) => (
          <img key={i} src={i} alt={exercise?.title} />
        ))} */}
        <AliceCarousel
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={500}
          animationDuration={0}
          infinite
          touchTracking={false}
          disableDotsControls
          disableButtonsControls
          items={imgs}
        />

        {typeof exercise?.description === "string" ? (
          <section className="ion-padding">
            <h2>Exercise description:</h2>
            <p className="l-height">{exercise?.description}</p>
          </section>
        ) : (
          <section className="ion-padding">
            <h2>Exercise Description:</h2>
            {exercise?.description.map((e: any, index: any) => (
              <section key={index}>
                <h3 >{e?.title}</h3>
                <p className="l-height">
                  {e?.description}
                </p>
                {e?.exerciseTip && (
                  <p className="l-height">
                    <strong>Exercise Tip:</strong> {e?.exerciseTip}
                  </p>
                )}
              </section>
            ))}
          </section>
        )}
      </IonContent>
    </IonPage>
  );
};

export default ExerciseDetail;
