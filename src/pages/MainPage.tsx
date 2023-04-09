import { IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Opis from '../components/Description';
import { ellipsisHorizontal, ellipsisVertical, handLeftOutline, homeOutline } from 'ionicons/icons';
import './MainPage.css';
const StronaGlowna: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="primary">
          <IonButton>
          <IonIcon slot="icon-only" lazy={true} ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
          </IonButton>
        </IonButtons>
          <IonTitle>Strona główna</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
                  <IonTitle size="large" >Strona główna</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Opis />
      </IonContent>
    </IonPage>
  );
};

export default StronaGlowna;
