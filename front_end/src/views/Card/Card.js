import React from 'react';
import logo from './logo.svg';
import './node_modules/semantic-ui-css/semantic.min.css';
import './App.css';
import { Card, Icon, Image } from 'semantic-ui-react'

const CardExampleCard = (image, title, description, url) => (
  <Card>
    <Image src={image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{title}</Card.Header>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a href={url}>
        Learn!
      </a>
    </Card.Content>
  </Card>
)

export default CardExampleCard
