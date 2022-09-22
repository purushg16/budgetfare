import { MDBBtn, MDBCol, MDBContainer, MDBFooter, MDBIcon, MDBNavbarBrand, MDBRow } from 'mdb-react-ui-kit';
import './Footer.css';
import logo from './Frame 7.png';

export default function Footer() {
    return(
        <section id='footer'>

          <div className='f-banner'>
            <p style={{ fontFamily:'Mackinac', color:'black', fontSize:'2em' }}> Start traveling for way <br></br> cheaper with Budgetfare </p>
            <MDBBtn
            style={{ 
              color:'white', 
              background:'#1F413D', 
              width:'auto', 
              fontFamily:'poppins',
              fontWeight: 'bold',
              padding: '2em',
              borderRadius: '10px',
              textTransform: 'capitalize',
              fontSize:'0.9em',
              marginTop:'1.5em'
            }}> 
            Get started now 
          </MDBBtn>
          </div>

          <div id='footer-flex'>
            <div className='foo-header'>
              <MDBNavbarBrand href="#" style={{ color:'black', fontFamily:'Mackinac', fontSize:'1.5em'}}> 
              <img src={logo} alt='' style={{width:'2rem'}}/>
               budjetfare </MDBNavbarBrand>
            </div>
            <div className='foo-list' style={{
              fontFamily:'poppins',
              fontWeight:'bold'
            }}> 
              <a href='.'> About </a> <span> | </span>
              <a href='.'> Privacy Policy </a> <span> | </span>
              <a href='.'> Terms of Service </a> <span> | </span>
              <a href='.'> Refund Policy </a> 
            </div>
            
            <MDBBtn outline color='dark' style={{ padding:'2em', color:'black', textTransform:'capitalize', fontFamily:'poppins', fontWeight:'bold' }} > Contact Us </MDBBtn>

          </div>

        </section>
    )
}