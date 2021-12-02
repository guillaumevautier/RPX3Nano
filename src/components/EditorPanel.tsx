import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, isPlatform, IonList, IonItem, IonLabel, IonListHeader, IonCard, IonCardSubtitle, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import { arrowDown, menu, close } from 'ionicons/icons';

const EditorPanel: React.FC = () => (
  <IonCard className='ion-card-section'>
    <IonRow>
      <IonList>
          <IonListHeader><h5>Editor</h5></IonListHeader>
      </IonList>
    </IonRow>
    <IonRow>
      <IonList>
        <IonListHeader><h5>Card Properties</h5></IonListHeader>
        <IonItem>
          <IonLabel>Selected Card title: ...</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Next practice interval : ...</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Stage:</IonLabel><IonIcon icon={arrowDown} style={{marginLeft: 'auto'}}/>
        </IonItem>
      </IonList>
    </IonRow>
    <IonRow>
      <IonList>
        <IonListHeader>
          <h5>Card Steps</h5>
        </IonListHeader>
        <IonItem>
          <IonCard>
            <IonCardHeader>
                <IonCardTitle style={{display: 'flex', maxHeight: '30px', alignItems: 'center'}}>
                  <IonIcon icon={menu} style={{marginRight: '15px'}}/>
                  <p>Step 1 text</p>
                  <IonIcon icon={close} style={{marginLeft: 'auto'}}/>
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                (Step 1 text...) Eg. Keep close to Nature's heart... and break clear away, once in awhile,
                and climb a mountain or spend a week in the woods. Wash your spirit clean.
              </IonCardContent>
          </IonCard> 
        </IonItem>
        <IonItem>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle style={{display: 'flex', maxHeight: '30px', alignItems: 'center'}}>
                <IonIcon icon={menu} style={{marginRight: '15px'}}/>
                <p>Step 2 text</p>
                <IonIcon icon={close} style={{marginLeft: 'auto'}}/>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              (Step 1 text...) Eg. Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </IonCardContent>
          </IonCard> 
        </IonItem>
        <IonItem>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle style={{display: 'flex', maxHeight: '30px', alignItems: 'center'}}>
                <IonIcon icon={menu} style={{marginRight: '15px'}}/>
                <p>Step 3 text</p>
                <IonIcon icon={close} style={{marginLeft: 'auto'}}/>
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              (Step 1 text...) Eg. Keep close to Nature's heart... and break clear away, once in awhile,
              and climb a mountain or spend a week in the woods. Wash your spirit clean.
            </IonCardContent>
          </IonCard> 
        </IonItem>
      </IonList>
    </IonRow>
    <IonRow>
      <IonList>
        <IonListHeader><h5>Card Action</h5></IonListHeader>
        <IonItem>
          <IonButton className="ion-button" color="primary" expand="block" size="default">delete card</IonButton>
        </IonItem>
        <IonItem>
          <IonButton className="ion-button" color="primary" expand="block" size="default">duplicate card</IonButton>
        </IonItem>
      </IonList>
    </IonRow>
  </IonCard>
);

export default EditorPanel;
