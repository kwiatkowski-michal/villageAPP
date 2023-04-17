import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRefresher, IonRefresherContent, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, RefresherEventDetail, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { document, home, information, informationCircle, informationCircleOutline, trash } from 'ionicons/icons';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import Dokumenty from './pages/DocsMain';
import Home from './pages/Home'
import Description from './pages/Description';
import WywozSmieci from './pages/Garbage';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

function App() {
  return (
  <IonApp>
    
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/smieci">
            <WywozSmieci />
          </Route>
          <Route path="/dokumenty">
            <Dokumenty />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/informacje">
            <Description />
          </Route>
          
        </IonRouterOutlet>
        <IonTabBar slot="bottom" translucent={true}>
          <IonTabButton tab="StronaGlowna" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Strona głowna</IonLabel>
          </IonTabButton>
          <IonTabButton tab="info" href="/informacje">
            <IonIcon aria-hidden="true" icon={informationCircle} />
            <IonLabel>Informacje ogólne</IonLabel>
          </IonTabButton>
          <IonTabButton tab="smieci" href="/smieci">
            <IonIcon aria-hidden="true" icon={trash} />
            <IonLabel>Wywóz śmieci</IonLabel>
          </IonTabButton>
          <IonTabButton tab="docs" href="/dokumenty">
            <IonIcon aria-hidden="true" icon={document} />
            <IonLabel>Dokumenty</IonLabel>
          </IonTabButton>
          
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)
}
export default App;
