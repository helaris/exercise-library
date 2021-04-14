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
  IonCheckbox,
  IonItem,
  IonLabel,
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

const mockupChecklist = [
  { value: "Arms", searchVal: "arms", isChecked: false },
  { value: "Back", searchVal: "back", isChecked: false },
  { value: "Chest", searchVal: "chest", isChecked: false },
  { value: "Full-Body", searchVal: "full", isChecked: false },
  { value: "Glutes/Butt", searchVal: "butt", isChecked: false },
  { value: "Legs", searchVal: "legs", isChecked: false },
  { value: "Abs", searchVal: "abs", isChecked: false },
  { value: "Shoulders", searchVal: "shoulders", isChecked: false },
];

const Exercises = () => {
  const [exercisesArr, setExercisesArr] = useState<exerciseInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [err, setErr] = useState(false);
  

  useEffect(() => {
    async function fetchData() {
      const request = await backend.get<exerciseInfo[]>("/api/exercises")
        .then(response => {
          setExercisesArr(response.data);
          setIsLoading(false);
        })
        .catch(err => {
          console.log(err.message);
          setErr(true);
          setIsLoading(false);
        })
      return request;
      // const request = await backend.get<exerciseInfo[]>("/api/exercises");
      // setExercisesArr(request.data);
      // setIsLoading(false);
      // return request;
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
        {err ? <p className="ion-text-center ion-padding">Sorry something went wrong. Please try again later.</p> : (
          exercisesArr.map((exercise) => (
            <ExerciseCard
              key={exercise._id}
              _id={exercise._id}
              title={exercise.title}
              image={exercise.images[0]}
              bodyPart={exercise.bodyPart}
              equipment={exercise.equipment}
            />
          ))
        )}
        <IonModal isOpen={showModal}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Filter Categories</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setShowModal(false)}>
                  <IonIcon icon={closeOutline} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
          </IonContent>
        </IonModal>
      </IonContent>
      <BottomNavigation />
    </IonPage>
  );
};

export default Exercises;
