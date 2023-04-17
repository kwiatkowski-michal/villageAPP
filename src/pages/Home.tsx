import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonLabel, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logoApple, openOutline } from "ionicons/icons";


function Cards(){
    return(
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Witaj w aplikacj Kruszyna Krajeńskiego!</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        Znajdziesz poniżej wszystkie informacje o Kruszynie Krajeńskim, podstawowe informacje czy najważniejsze dokumenty dla mieszkańców.
      </IonCardContent>
      
      <IonButton href="https://facebook.com" fill="clear">Aktualności
      <IonIcon icon={openOutline} slot="end" size="small"></IonIcon> </IonButton>
      <IonButton fill="clear">Kontakt</IonButton>
    </IonCard>
    )
}

export default function Home(){
    return(
        <IonPage>
      <IonHeader>
      </IonHeader>
      <IonContent fullscreen>
        <Cards/>
      </IonContent>
    </IonPage>
    )
}