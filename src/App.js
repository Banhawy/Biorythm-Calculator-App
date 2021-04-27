import {
  IonApp,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonItem,
  IonLabel,
  IonDatetime,
} from '@ionic/react';
import React from 'react';
import BioCard from './components/BioCard'
import { useLocalStorage } from './hooks'

function App() {
  const [DOB, setDOB] = useLocalStorage('DOB', '')
  const targetDate = new Date().toISOString();
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythyms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="stacked">Date of Birth: </IonLabel>
          <IonDatetime displayFormat="DD-MMM-YYYY"
            value={DOB} 
            onIonChange={(e) => setDOB(e.detail.value)} 
          />
        </IonItem>
        {DOB && (<BioCard targetDate={targetDate} DOB={DOB}/>)}
      </IonContent>
    </IonApp>
  );
}

export default App;
