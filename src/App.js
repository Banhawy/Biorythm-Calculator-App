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
import React, { useState } from 'react';
import BioCard from './components/BioCard'
import { useLocalStorage } from './hooks'

function App() {
  const [DOB, setDOB] = useLocalStorage('DOB', '')
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
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
        <IonItem>
          <IonLabel position="stacked">Target Date: </IonLabel>
          <IonDatetime displayFormat="DD-MMM-YYYY"
            value={targetDate} 
            onIonChange={(e) => setTargetDate(e.detail.value)} 
          />
        </IonItem>
        {DOB && (<BioCard targetDate={targetDate} DOB={DOB}/>)}
      </IonContent>
    </IonApp>
  );
}

export default App;
