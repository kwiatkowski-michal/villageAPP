import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { document, home, trash } from 'ionicons/icons';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import Dokumenty from './pages/DocsMain';
import StronaGlowna from './pages/MainPage';
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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
          <Redirect exact path="/" to="/home" />
          <Route exact path="/home">
            <StronaGlowna />
          </Route>
          <Route exact path="/smeici">
            <WywozSmieci />
          </Route>
          <Route path="/dokumenty">
            <Dokumenty />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" translucent={true}>
          <IonTabButton tab="StronaGlowna" href="/home">
            <IonIcon aria-hidden="true" icon={home} />
            <IonLabel>Strona głowna</IonLabel>
          </IonTabButton>
          <IonTabButton tab="smieci" href="/smeici">
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
);

export default App;
