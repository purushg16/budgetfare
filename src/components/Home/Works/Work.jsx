import "./Works.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function Work(props) {
  return (
    <section id="works">
      <h3 style={{ fontWeight: 'bold'}}> How It Works </h3>

      <Container style={{ marginTop: '5%', padding: '0% 9%' }}>
        <Row>
          <Col>
            <h5 style={{ fontWeight: 'bold'}} > 1.Select your home airports </h5>
            <img src='https://i.pinimg.com/originals/cc/a5/02/cca5022c86f67861746d7cf2eb486de8.gif' alt='' style={{ width: '80%' }}/>
            <h6 style={{ marginTop: '5%', padding: '0% 9%' }}>Let us know what airports you are interested in flying out of.</h6>
          </Col>
          <Col>
            <h5 style={{ fontWeight: 'bold'}} > 2.Select your home airports </h5>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT41RKKh0zoKvp0EiDUeLSShDYSHivuUARAuA&usqp=CAU' alt='' style={{ width: '80%' }}/>
            <h6 style={{ marginTop: '5%', padding: '0% 9%' }}>Make sure you only get notified about deals in regions that you are interested in traveling to..</h6>
          </Col>
          <Col>
            <h5 style={{ fontWeight: 'bold'}} > 3.Select your home airports </h5>
            <img src='https://i.gifer.com/Olb0.gif' alt='' style={{ width: '80%' }}/>
            <h6 style={{ marginTop: '5%', padding: '0% 9%' }}>Get notified about amazing deals that you can book using your favorite booking site or application!</h6>
          </Col>
        </Row>
      </Container>
    </section>
  );
}