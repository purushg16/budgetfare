import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
} from "mdb-react-ui-kit";
// import { useEffect, useState } from "react";
import logo from "./logo.png";
import "./Navbar.css";
// import { useNavigate, useLocation, Navigate} from "react-router-dom";

function NavbarTop() {
  // const [showBasic, setShowBasic] = useState(false);
  
  function signOut(){
    window.sessionStorage.removeItem('token');
    window.location.reload();
  }

  // useEffect( ()=>{
  //   console.log(document.querySelector('.loader').style)
  // })

  return (
    <>    
      <MDBNavbar sticky expand="lg" light  className="lnavbar-top" style={{ background: '#ffffffe8' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="#"> 
          <img
              src={logo}
              alt=""
              style={{ width: "1.2rem" }}
            />
          BudgetFare </MDBNavbarBrand>

          {/* <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler> */}

          {/* <MDBCollapse navbar show={showBasic}> */}
            <MDBNavbarNav  id="link-group" className="mr-auto mb-2 mb-lg-0" 
              style={{ fontFamily: "poppins", color: "black" }}
              >
            <MDBNavbarItem>
                <MDBNavbarLink href="#" style={{ whiteSpace: 'nowrap',  fontWeight:'bold' }}> Deals </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"  style={{ whiteSpace: 'nowrap',  fontWeight:'bold' }}> Departure Airport </MDBNavbarLink> 
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"  style={{ whiteSpace: 'nowrap',  fontWeight:'bold' }}> Deals Settings </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/myaccount"  style={{ whiteSpace: 'nowrap', fontWeight:'bold' }}> My Account </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"  style={{ whiteSpace: 'nowrap' }}> GiftFareDrop </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#"  style={{ whiteSpace: 'nowrap' }}> Miles & Points </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <div className='button-group'>
              <a href="#register-form"><MDBBtn onClick={signOut} outline color="success" type="button" className='nav-reg-btn' 
                style={{ 
                  whiteSpace: 'nowrap',
                  borderRadius:'9px',
                  padding:'1.5em 3em',
                  textTransform:'capitalize',
                  fontFamily:'poppins',
                  fontWeight:'bold'
                  }}>
                Sign Out
              </MDBBtn>
              </a>
            </div>
        </MDBContainer>
      </MDBNavbar>

      <h3 style={{ margin: '3% 7%', textAlign: 'left', fontFamily:'Mackinac' }}> Hello, Purushothaman! </h3>
    </>
  );
}

export default NavbarTop;
