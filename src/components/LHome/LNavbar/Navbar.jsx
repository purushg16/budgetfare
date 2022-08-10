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
      
      <MDBNavbar sticky expand="lg" light  className="lnavbar-top" style={{ background: '#ffffffe8' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#"> BudgetFare </MDBNavbarBrand>

          {/* <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler> */}

          {/* <MDBCollapse navbar show={showBasic}> */}
            <MDBNavbarNav  id="link-group" className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
                <MDBNavbarLink href="#" style={{ whiteSpace: 'nowrap' }}> Deals </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"  style={{ whiteSpace: 'nowrap' }}> Departure Airport </MDBNavbarLink> 
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"  style={{ whiteSpace: 'nowrap' }}> Deals Settings </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"  style={{ whiteSpace: 'nowrap' }}> My Account </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"  style={{ whiteSpace: 'nowrap' }}> GiftFareDrop </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"  style={{ whiteSpace: 'nowrap' }}> Miles & Points </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <div className='button-group'>
              <a href="#register-form"><MDBBtn outline color="success" type="button" className='nav-reg-btn' style={{ whiteSpace: 'nowrap' }}>
                Sign Out
              </MDBBtn>
              </a>
            </div>
        </MDBContainer>
      </MDBNavbar>

      <h3 style={{ margin: '5% 7%', textAlign: 'left' }}> Hello, Purushothaman! </h3>
    </>
  );
}

export default NavbarTop;
