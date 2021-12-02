import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, isPlatform, IonList, IonItem, IonLabel, IonListHeader, IonCard } from '@ionic/react';

const BrowserPanel: React.FC = () => (
  <IonCard className='ion-card-section'>
    <IonRow>
      <IonList>
          <IonListHeader><h5>Browser</h5></IonListHeader>
      </IonList>
    </IonRow>
    <IonRow>
      <IonList>
        <IonListHeader><h5>Current User: John</h5></IonListHeader>
      </IonList>
    </IonRow>
    <IonRow>
      <IonList>
        <IonListHeader><h5>Starting Card</h5></IonListHeader>
        <IonItem>
          <IonLabel>Card 1 Title</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Card 2 Title</IonLabel>
        </IonItem>
      </IonList>
    </IonRow>
    <IonRow>
      <IonList>
        <IonListHeader><h5>Ending Card</h5></IonListHeader>
        <IonItem>
          <IonLabel>Card 3 Title</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Card 4 Title</IonLabel>
        </IonItem>
      </IonList>
    </IonRow>
    <IonRow>
      <IonList>
        <IonListHeader><h5>Common Card</h5></IonListHeader>
        <IonItem>
          <IonLabel>Card 1 Title</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Card 2 Title</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Card 3 Title</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Card 4 Title</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Card 5 Title</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Card 6 Title</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Card 7 Title</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Card 8 Title</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Card 9 Title</IonLabel>
        </IonItem>
      </IonList>
    </IonRow>
  </IonCard>
);

export default BrowserPanel;



