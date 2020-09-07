import React from 'react'

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermometer,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,
} from './styles'

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informação sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localização</p>
          <strong>RS, Porto Alegre</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermometer>
          <li />
          <li />
          <li />
          <li />
          <li className='active' />
        </ReputationThermometer>

        <ReputationRow>
          <div>
            <strong>561</strong>
            <span></span>
          </div>
          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span></span>
          </div>
          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span></span>
          </div>
        </ReputationRow>
      </ReputationCard>

      <More>Ver mais dados do vendedor</More>
    </Container>
  )
}

export default SellerInfo
