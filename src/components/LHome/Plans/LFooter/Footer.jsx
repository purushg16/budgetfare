import { MDBBtn, MDBNavbarBrand } from "mdb-react-ui-kit";
import logo from './Frame 7.png';



export default function LFooter(props) {

    return(

        <section id='l-footer'>

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