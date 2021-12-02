import React, { useState } from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, isPlatform, IonList, IonItem, IonLabel, IonListHeader, IonCard, IonItemDivider, IonInput, IonSelect, IonSelectOption } from '@ionic/react';

const BrowserPanel: React.FC = () => {
  const [user, setUser] = useState<string>();

  return (
    <IonCard className='ion-card-section'>
      <IonRow>
        <IonList>
            <IonListHeader><h5>Browser</h5></IonListHeader>
        </IonList>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem style={{width: '40%'}} className='dropdown-selector'>
            <IonLabel>User:</IonLabel>
            <IonSelect value="john">
              <IonSelectOption value="john">John</IonSelectOption>
              <IonSelectOption value="erick">Erick</IonSelectOption>
              <IonSelectOption value="carl">Carl</IonSelectOption>
            </IonSelect>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonList>
          <IonListHeader><h5>Starting Card</h5></IonListHeader>
          <IonItem>
            <IonLabel>mail chime, check new mail</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>open door, stand up right</IonLabel>
          </IonItem>
        </IonList>
      </IonRow>
      <IonRow>
        <IonList>
          <IonListHeader><h5>Ending Card</h5></IonListHeader>
          <IonItem>
            <IonLabel>todo thought, write to mini agenda</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>first office desk routine</IonLabel>
          </IonItem>
        </IonList>
      </IonRow>
      <IonRow>
        <IonList>
          <IonListHeader><h5>Common Card</h5></IonListHeader>
          <IonItem>
            <IonLabel>before meeting routine</IonLabel>
          </IonItem>
          {/* <IonItem>
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
          </IonItem> */}
        </IonList>
      </IonRow>
    </IonCard>
  );
}

export default BrowserPanel;



