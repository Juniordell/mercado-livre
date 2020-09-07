import React from 'react'

import tshirtImage from '../../assets/tshirt.png'

import SellerInfo from '../SellerInfo'

import ProductAction from '../ProductAction'

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles'

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href='#'>Compartilhar</a>
        <a href='#'>Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt='T-shirt' />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  )
}

const WarrantySection = () => (
  <Section>
    <h4></h4>

    <div>
      <span>
        <p className='title'>Compra garantida com Lorem Ipsum</p>
        <p className='description'>
          Receba o produto que esta esperando ou receba o seu dinheiro
        </p>
      </span>
      <span>
        <p className='title'>Garantia do vendedor</p>
        <p className='description'>sem garantia</p>
      </span>
    </div>

    <a href='#'>Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Description</h2>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
      blanditiis aperiam, laboriosam culpa ipsum officiis ipsam id, eveniet ab
      consequuntur nemo velit similique voluptates, iusto libero quo labore sed
      saepe!
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ducimus
      placeat, vero molestiae beatae veritatis dolorum ipsum non? Minus soluta
      cupiditate atque laudantium molestiae nam nemo hic quis nulla totam.
    </p>
  </Description>
)

export default Product
