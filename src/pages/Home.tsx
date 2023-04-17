import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { logoApple, openOutline } from "ionicons/icons";


function Cards(){
    return(
        <>
        <IonCard>
      <IonCardHeader>
        <IonCardTitle>Witaj w aplikacji Kruszyna Krajeńskiego!</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
       <h2>Znajdziesz poniżej wszystkie informacje o Kruszynie Krajeńskim, podstawowe informacje czy najważniejsze dokumenty dla mieszkańców.</h2>
      </IonCardContent>
      
      <IonButton target="_blank" href="https://facebook.com" fill="clear">Aktualności
      <IonIcon icon={openOutline} slot="end" size="small"></IonIcon> </IonButton>
      <IonButton fill="clear">Kontakt</IonButton>
    </IonCard>
    <IonList lines="full">
        <IonListHeader>
            <h2>Aplikacje gminne</h2>
        </IonListHeader>
    <IonItem button detail={true} target="_blank" href="https://ecosanity.pl/instrukcje">
        <IonLabel>
          <h3>EcoSanity</h3>
          <p className="ion-text-wrap">W aplikacji właściciel nieruchomości może zlecić wywóz nieczystości dowolnej firmie asenizacyjnej, która uzyskała zezwolenie na wywóz nieczystości płynnych z terenu gminy Białe Błota.</p>
        </IonLabel>
      </IonItem>
      <IonItem button detail={true} target="_blank" href="https://kiedysmieci.info">
        <IonLabel>
          <h3>Kiedy Śmieci</h3>
          <p className="ion-text-wrap">Zapraszamy do pobierania i instalowania prostej i przyjaznej aplikacji mobilnej "Kiedy śmieci", która posiada kilka funkcji, ale jedno zadanie - poinformować o zbliżającym się odbiorze odpadów.</p>
          </IonLabel>
      </IonItem>
      <IonItem button detail={true} target="_blank" href="https://zadbanagmina.bialeblota.eu">
        <IonLabel>
          <h3>Zadbana Gmina</h3>
          <p className="ion-text-wrap">Zadbana Gmina to prosta komunikacja pomiędzy mieszkańcami a urzędem gminy i odpowiednimi służbami. Dzięki aplikacji mieszkańcy mogą: zgłaszać różne problemy, takie jak awarie, dziury w drogach, złą organizację ruchu i inne problemy, kontrolować ich obsługę przez odpowiednie władze czy też otrzymywać natychmiastowe informacje o ważnych sprawach i wydarzeniach w okolicy.</p>
        </IonLabel>
      </IonItem>
    </IonList>
    </>
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