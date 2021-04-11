import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonCardSubtitle,
  IonButton,
} from "@ionic/react";

interface CardProps {
  _id: string;
  title: string;
  image: string;
  bodyPart: string;
  equipment: string;
}

const ExerciseCard = ({_id, title, image, bodyPart, equipment}: CardProps) => (
  <IonCard key={_id} routerLink={`/exercise/${_id}`}>
    <img alt={title} src={image} className="card-image-resize" />
    <IonCardHeader>
      <IonCardTitle className="ion-text-center card-title-size">
        {title}
      </IonCardTitle>
      <IonGrid>
        <IonRow className="ion-justify-content-center">
          <IonCol>
            <IonCardSubtitle>
              BODY PART: <br />
              {bodyPart}
            </IonCardSubtitle>
          </IonCol>
          <IonCol>
            <IonCardSubtitle>
              Equipment: <br />
              {equipment}
            </IonCardSubtitle>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCardHeader>
    <IonButton
      expand="full"
      fill="solid"
      className="ion-no-margin"
      routerLink={`/exercise/${_id}`}
    >
      View Details
    </IonButton>
  </IonCard>
);

export default ExerciseCard;
