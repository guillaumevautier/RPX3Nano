import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, isPlatform, IonList, IonItem, IonLabel, IonListHeader, IonCard } from '@ionic/react';
import './Home.css';
import BrowserPanel from '../components/BrowserPanel';
import EditorPanel from '../components/EditorPanel';
import TrainerPanel from '../components/TrainerPanel';

const GridExample: React.FC = () => (
  <IonPage className="ion-page">
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>RPXNano Page</IonTitle>
        {/* {isPlatform('ios') && <ToolbarAction link="/new-memory" icon={add} />} */}
      </IonToolbar>
    </IonHeader>
    <IonContent color="medium" fullscreen>
      <IonGrid>
        <IonRow>
          <IonCol style={{marginBottom: '30px'}}>
            <BrowserPanel />
          </IonCol>
          <IonCol style={{marginBottom: '30px'}}>
            <EditorPanel />
          </IonCol>
          <IonCol style={{marginBottom: '30px'}}>
            <TrainerPanel />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  </IonPage>
);

export default GridExample;