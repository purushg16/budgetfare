import { MDBBtn, MDBNavbarBrand } from "mdb-react-ui-kit";
import logo from './Union.png';


import './LFooter.css'

export default function LFooter(){

    return(
        <section id="lfooter">
           
           <div id="lf-top">
           <h4 style={{marginBottom: '2%', fontFamily:'Mackinac', color:'black'}}> Not seeing the deals you want? </h4>
            <MDBBtn outline 
                style={{ 
                    borderColor:'#2c625c', 
                    color:'#2c625c', 
                    borderRadius:'9px', 
                    padding:'2em',
                    textTransform:'capitalize',
                    fontWeight:'bold',
                    fontFamily:'poppins'
                    }}>
                 Edit deal Settings 
                </MDBBtn>
           </div>

            <div id='footer-flex'>
            <div className='foo-header'>
              <MDBNavbarBrand href="#" style={{ color:'white', fontFamily:'poppins', fontSize:'1.5em'}}> 
              <img src={logo} alt='' style={{width:'1.5rem', marginRight:'5%'}}/>
               BudjetFare </MDBNavbarBrand>
            </div>
            <div className='foo-list' style={{
              fontFamily:'poppins',
              fontWeight:'bold',
            }}> 
              <a href='.'> About </a> <span> | </span>
              <a href='.'> Privacy Policy </a> <span> | </span>
              <a href='.'> Terms of Service </a> <span> | </span>
              <a href='.'> Refund Policy </a> 
            </div>
            
            <MDBBtn outline color='light' style={{ padding:'2em', color:'white', textTransform:'capitalize', fontFamily:'poppins', fontWeight:'bold' }} > Contact Us </MDBBtn>

          </div>
        </section>
    )

}