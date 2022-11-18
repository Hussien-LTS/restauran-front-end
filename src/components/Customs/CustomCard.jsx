import {Card,Col,Row} from 'react-bootstrap';

const CustomCard= (props)=> {
  return (
        <Col>
          <Card>
            <Card.Img variant="top" src="http://via.placeholder.com/366x160" />
            <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Title>{props.desc}</Card.Title>
            <Card.Title>{props.price}</Card.Title>
              <Card.Text>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
  );
}

export default CustomCard;