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

import "./Navbar.css";

function NavbarTop() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      
      <MDBNavbar sticky expand="lg" light  className="navbar-top" style={{ background: '#ffffffe8' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#"> BudgetFare </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
                <MDBNavbarLink href="#"> Pricing </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"> How It Works </MDBNavbarLink> 
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"> FAQ </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"> Gift FareDrop </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"> Miles & Points </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <MDBContainer className='button-group'>
              <MDBBtn  color="success" className='mx-2' type="button">
                Login
              </MDBBtn>
              <MDBBtn outline color="success" type="button" className='nav-reg-btn'>
                Register
              </MDBBtn>
            </MDBContainer>
          </MDBCollapse>          
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default NavbarTop;
