import React from 'react';
import { IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton, IonTitle, IonContent } from '@ionic/react';
import { caretBack, chevronBackOutline } from 'ionicons/icons';

interface ContainerProps {
          description: string | null
          dl_link: string | null
          title: string | null
}

const Doc: React.FC<ContainerProps> = ({title, description, dl_link}) => {
    return (
        <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="Dokumenty" icon={chevronBackOutline}></IonBackButton>
          </IonButtons>
          <IonTitle>Dokument</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h1>{title}</h1>
        <p>{description}</p>
        {dl_link && <IonButton href={dl_link} target="_blank" fill="outline">Pobierz pismo</IonButton>}
      </IonContent>
    </>
    );
};


export default Doc;