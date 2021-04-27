import React from 'react'
import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
  } from '@ionic/react';
import dayjs from 'dayjs'
import { calculateBios } from '../calculations'
import BioChart from './BioChart';
import './BioCard.css'

const formatDate = (isoString) => dayjs(isoString).format('D MMM YYYY')

const BioCard = ({ DOB, targetDate }) => {
    const { physical, emotional, intellectual } = calculateBios(DOB, targetDate)
    return (
        <IonCard className="ion-text-center">
          <IonCardHeader>
            <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <BioChart DOB={DOB} targetDate={targetDate} />
            <p className="physical">Physical: {physical.toFixed(4)}%</p>
            <p className="emotional">Emotional: {emotional.toFixed(4)}%</p>
            <p className="intellectual">Intellectual: {intellectual.toFixed(4)}%</p>
          </IonCardContent>
        </IonCard>
    )
}

export default BioCard
