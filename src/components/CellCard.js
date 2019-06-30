import React from 'react';
import { Container, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import phone from "../images/Cellphone.png";

const CellCard = (props) => {
  return (
    <Container>
      <Card>
        <img src={phone} alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CellCard;