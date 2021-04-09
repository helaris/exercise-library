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

const ExerciseCard = (props: CardProps) => (
  <IonCard key={props._id} routerLink={`/exercise/${props._id}`}>
    <img alt={props.title} src={props.image} className="try" />
    <IonCardHeader>
      <IonCardTitle className="ion-text-center">{props.title}</IonCardTitle>
      <IonGrid className="ion-text-center">
        <IonRow>
          <IonCol>
            <IonCardSubtitle className="ion-padding-top">
              BODY PART: <br />
              {props.bodyPart}
            </IonCardSubtitle>
          </IonCol>
          <IonCol>
            <IonCardSubtitle className="ion-padding-top">
              Equipment: <br />
              {props.equipment}
            </IonCardSubtitle>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonCardHeader>
    <IonButton
      expand="full"
      fill="solid"
      className="ion-no-margin"
      routerLink={`/exercise/${props._id}`}
    >
      View Details
    </IonButton>
  </IonCard>
);

export default ExerciseCard;
