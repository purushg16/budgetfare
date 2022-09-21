import "./Works.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import s1 from './hiw-step1.png';
import s2 from './hiw-step2.png';
import s3 from './hiw-step3.png';

export default function Work(props) {
  return (
    <section id="works">
      <h3 style={{fontFamily:'MackinacMed', color:'black'}}> How It Works </h3>
      <hr style={{
            borderTop: '1.5px solid rgb(34, 34, 34)',
            marginBottom: '1.5em',
            width: '200px',
            margin: "auto",
            opacity:1
      }} />

      <Container style={{ marginTop: '1%', padding: '0% 3%' }}>
        <Row>
          <Col sm={12} md={4} lg={4} className='work-col'>
            <div style={{padding:'15%'}}>
              <img src={s1} alt='' style={{ width:'100%', '-webkit-mask-image': 'linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0))' }} />
              <p className="work-p"> Let us know what airports you are interested in flying out of. </p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4} className='work-col'>
            <div style={{padding:'15%'}}>
              <img src={s2} alt='' style={{ width:'100%', '-webkit-mask-image': 'linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0))' }}/>
              <p className="work-p"> Make sure you only get notified about deals in regions that you are interested in traveling to. </p>
            </div>
          </Col>
          <Col sm={12} md={4} lg={4 } className='work-col'>
            <div style={{padding:'15%'}}>
              <img src={s3} alt='' style={{ width:'100%', '-webkit-mask-image': 'linear-gradient(rgb(0, 0, 0) 80%, rgba(0, 0, 0, 0))' }}/>
              <p className="work-p">Get notified about amazing deals that you can book using your favorite booking site or application!</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
