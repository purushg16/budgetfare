import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { useState } from "react";
import logo from './logo.png';
import pepper from './peppers.png';

import './fonts/P22MackinacPro-Bold_16.otf';
import './fonts/P22MackinacPro-ExtraBold_12.otf';
import "./Navbar.css";

function NavbarTop() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>

    <div id="ad-banner">
      <p style={{marginBottom: 0, color:'white'}}> 
        <img src={pepper} alt='' style={{ paddingRight:'1%' }}/>
        Our Domestic Plan is available!
        <a href="." style={{color:'#00D890'}}> Sign up for free </a>
        <img src={pepper} alt='' style={{ paddingLeft: '1%' }}/>
      </p>
    </div>
      
      <MDBNavbar expand="lg" light  className="navbar-top">
        <MDBContainer fluid>
          <MDBNavbarBrand href="#"> <img src={logo} alt='' style={{width:'1.2rem'}}/> budjetfare. </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0" style={{ fontFamily: 'poppins', color:'black'}}>
            <MDBNavbarItem>
                <MDBNavbarLink href="#"> Pricing </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"> How it Works </MDBNavbarLink> 
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"> FAQ </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"> Gift Budgetfare </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"> Miles & Points </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <MDBContainer className='button-group'>
              <a href="/login" style={{ color:'black', padding: '0% 4%', fontWeight:'bold', fontFamily: 'poppins'}}> Login  </a>
              <a href="#register-form">
                <MDBBtn outline rounded color="success" type="button" 
                  style={{padding:'1rem', fontWeight:'bold', textTransform:'none',  fontFamily: 'poppins'}}
                >
                Get Started
              </MDBBtn>
              </a>
            </MDBContainer>
          </MDBCollapse>          
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default NavbarTop;
