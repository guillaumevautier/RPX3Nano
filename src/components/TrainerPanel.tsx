import React from 'react';
import { IonRow, IonList, IonItem, IonLabel, IonListHeader, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCardSubtitle, IonButton } from '@ionic/react';

const TrainerPanel: React.FC = () => (
  <IonCard className='ion-card-section'>
    <IonRow>
      <IonList>
          <IonListHeader><h5>Trainer Visual Panel</h5></IonListHeader>
      </IonList>
    </IonRow>
    <IonRow>
    <IonCard>
      <IonCardHeader>
          <IonCardTitle>Last dropped card</IonCardTitle>
          {/* <IonCardSubtitle></IonCardSubtitle> */}
        </IonCardHeader>
        <IonCardContent>
          <IonCard>
            <IonCardContent>Step 1 text...</IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardContent>Step 2 text...</IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardContent>Step 3 text...</IonCardContent>
          </IonCard>
        </IonCardContent>
    </IonCard> 
    </IonRow>
    <IonRow>
      <IonList>
        <IonListHeader><h5>Trainer Visual Panel</h5></IonListHeader>
        <IonItem>
          <h6 style={{color: "#a0a0a0"}}>Training session setup</h6>
        </IonItem>
        <IonItem>
          <IonLabel>Text to speech audio [ON]</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>music audio : [ON]</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>(music song :) Song 1              [v]</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Text to speech audio [ON]</IonLabel>
        </IonItem>
        <IonItem>
          <IonButton className="ion-button" color="primary" expand="block" size="default">re-start training</IonButton>
        </IonItem>
        <div style={{height: '20px'}}></div>
        <IonItem>
          <h6 style={{color: "#a0a0a0"}}>Training session navigation</h6>
        </IonItem>
        <IonItem>
          <IonButton className="ion-button" color="primary" expand="block" size="default">next step</IonButton>
        </IonItem>
        <IonItem>
          <IonButton className="ion-button" color="primary" expand="block" size="default">previous step</IonButton>
        </IonItem>
        <IonItem>
          <IonButton className="ion-button" color="primary" expand="block" size="default">next card</IonButton>
        </IonItem>
        <IonItem>
          <IonButton className="ion-button" color="primary" expand="block" size="default">previous card</IonButton>
        </IonItem>

        <div style={{height: '20px'}}></div>
        <IonItem>
          <h6 style={{color: "#a0a0a0"}}>Mastery feedback</h6>
        </IonItem>
        <IonItem>
          <IonButton className="ion-button" color="primary" expand="block" size="default">easy</IonButton>
        </IonItem>
        <IonItem>
          <IonButton className="ion-button" color="primary" expand="block" size="default">good</IonButton>
        </IonItem>
        <IonItem>
          <IonButton className="ion-button" color="primary" expand="block" size="default">hard</IonButton>
        </IonItem>
        <IonItem>
          <IonButton className="ion-button" color="primary" expand="block" size="default">forgotten</IonButton>
        </IonItem>
      </IonList>
    </IonRow>
  </IonCard>
);

export default TrainerPanel;
