import { IonActionSheet, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar, RefresherEventDetail } from '@ionic/react';
import React from 'react';
import Opis from '../components/Description';
import { ellipsisHorizontal, ellipsisVertical, handLeftOutline, homeOutline } from 'ionicons/icons';
import './MainPage.css';
const StronaGlowna: React.FC = () => {
  function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
    setTimeout(() => {
      // Any calls to load data go here
      event.detail.complete();
    }, 2000);
  }
  
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
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
  </>
  );
};

export default StronaGlowna;
