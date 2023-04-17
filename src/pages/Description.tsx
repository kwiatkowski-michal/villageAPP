import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonRefresher, IonRefresherContent, RefresherEventDetail } from '@ionic/react';
import village from "./village.json";
function Description(){
    function handleRefresh(event: CustomEvent<RefresherEventDetail>) {
        setTimeout(() => {
            window.location.reload();
          event.detail.complete();
        }, 1000);
      }

    return (
        <>
            <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
              <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Liczba mieszkańców</IonCardTitle>
                    <IonCardSubtitle>Stan na {village.mieszkancy.data}</IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>{village.mieszkancy.osoby} osób</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Powierzchnia</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{village.powierzchnia} km²</IonCardContent>
            </IonCard>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Sołtys</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{village.soltys.dane}</IonCardContent>

                <IonButton fill="clear" href={village.soltys.telefon}>
                    Zadzwoń
                </IonButton>

                <IonButton fill="clear" href={village.soltys.mail}>
                    Wyślij e-mail
                </IonButton>
            </IonCard>
        
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Rada sołecka</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                {village.rada_solecka.dane.map((osoba, index) => (
                        <div key={index}>
                            <p>{osoba.imie_nazwisko}</p>
                            <p>{osoba.stanowisko}</p>
                        </div>
                    ))}
                </IonCardContent>
            </IonCard>
        </>
    );
}


const DescriptionMain: React.FC = () => {
  
  return (
    <>
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Informacje ogólne</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" >Informacje ogólne</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Description/>
      </IonContent>
    </IonPage>
  </>
  );
};

export default DescriptionMain;
