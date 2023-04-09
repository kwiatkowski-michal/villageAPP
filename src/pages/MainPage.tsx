import { IonActionSheet, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import Opis from '../components/Description';
import { ellipsisHorizontal, ellipsisVertical, handLeftOutline, homeOutline } from 'ionicons/icons';
import './MainPage.css';
const StronaGlowna: React.FC = () => {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Strona główna</IonTitle>
          <IonButtons slot="primary">
              <IonButton id='open-action-sheet'>
                <IonIcon slot="icon-only" lazy={true} ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
              </IonButton>
            </IonButtons>
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
    <IonActionSheet
    trigger="open-action-sheet"
    header="Opcje"
    buttons={[
      {
        text: 'Sprawdź aktualizacje',
        data: {
          action: {refreshPage}
        }
      },
      {
        text: 'Wyjdź',
        role: 'cancel',
        data: {
          action: 'cancel'
        }
      }
    ]}
  ></IonActionSheet>
  </>
  );
};

export default StronaGlowna;
