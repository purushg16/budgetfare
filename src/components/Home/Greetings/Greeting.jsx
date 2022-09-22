import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import "./Greeting.css";

import sign from './sign.png';

export default function Greeting(props) {
  return (
    <section id="greet-sec">
      <MDBContainer>
        <MDBRow>
          <MDBCol md={12} sm={12} lg={6}>
            <div style={{ padding:'5%'}}>
                <div className="ratio ratio-16x9">
                <iframe
                    src="https://www.youtube.com/embed/vlDzYIIOYmM"
                    title="YouTube video"
                    allowfullscreen
                    style={{borderRadius:'5px'}}
                ></iframe>
                </div>
            </div>
          </MDBCol>

          <MDBCol md={12} sm={12} lg={6}>
            <div style={{ textAlign:'left', fontWeight:'bold', padding:'0 3% 3em', wordSpacing:'0.3em' }}>
              <h4 style={{fontFamily:'Mackinac', color:'black', fontSize:'2em', marginBottom:'1em', whiteSpace:'nowrap'}}> Created by expert travelers </h4>
              <div style={{ fontFamily:'poppins', color:'grey' }}>
              <p>
                {" "}
                Hi! We're Kara and Nate. High school sweet hearts from
                Nashville, TN whose shared love of travel has lead us on the
                adventure of a lifetime. In 2016 we quit our jobs to spend one
                year traveling around the world. Six years later, we still
                haven't stopped! We've visited over 100 countries, and been
                fortunate enough to build an awesome community of subscribers on
                our <span style={{ color:'#2C625C' }}> YouTube channel. </span>
              </p>
              <p>
                After traveling to over 100 countries we've learned a thing or
                two about finding great flight deals - we're so happy to share
                our secret weapon with you!
              </p>

            <div style={{ display:'flex', flexDirection:'column', alignItems: 'end' }}>
                <p style={{ textAlign:'right', paddingTop:'5%'}}> Cheers from somewhere, </p>
                <img style={{width:'fit-content'}} src={sign} alt='' /> 
            </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
