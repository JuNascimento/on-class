import React from 'react'
import { StudantInformation, Photo, Info, InfoItem } from './index.style'

const StudantInformationContainer: React.FC = () => {
  return (
    <StudantInformation data-testid='studant-information-container'>
      <Photo>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1291.116 1638.771'
          width='50px'
          data-testid='photo-svg'
        >
          <path d='M959.98 769.382C873.16 846.125 770.543 880.92 645.557 880.92s-228.083-35.757-314.903-112.5c-136.539 44.711-299.819 158.492-300 357.211l-.48 370.673c-.089 68.183 54.892 123.081 123.077 123.081h984.614c68.185 0 123.077-54.894 123.077-123.081v-369.23c0-170.673-135.669-314.558-300.961-357.692h-.001zM1014.788 388.615c0 203.92-165.31 369.23-369.23 369.23s-369.23-165.311-369.23-369.23 165.31-369.23 369.23-369.23 369.23 165.311 369.23 369.23z' />
        </svg>
      </Photo>
      <Info>
        <InfoItem>Pedro Furtado</InfoItem>
        <InfoItem>Cálculo I</InfoItem>
      </Info>
    </StudantInformation>
  )
}

export default StudantInformationContainer