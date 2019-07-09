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
          <CardTitle>Glass Phone OF the future</CardTitle>
          <CardSubtitle>This will enventually be real.</CardSubtitle>
          <CardText>So where do you see youself in 5 years? Is it holding this Phone? Yeah me too.
          </CardText>
          <Button>Dream on, man...</Button>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CellCard;