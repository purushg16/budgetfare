import "./MyAccount.css";
import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBInputGroup,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";
import Personal from "./Personal";
import AccountPlans from "./Plan";
import Notifications from "./Notification";
import { useNavigate, useLocation, Navigate} from "react-router-dom";
import NavbarTop from "../LNavbar/Navbar";


export default function MyAccount() {

  const navigate = useNavigate();
  const location = useLocation();

  window.sessionStorage.setItem("token", 'hii');

  const [verticalActive, setVerticalActive] = useState("tab1");
  

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  const removeToken =() =>{
    window.sessionStorage.removeItem("token");
  }

  React.useEffect( ()=>{
    console.log('working');
    if(window.sessionStorage.getItem("token")===null) {
        console.log('jeollo');
        navigate('/~')
    }
  })

  return (

    <>
    <NavbarTop header={false} />
    <section id="my-account">
      <div
        style={{
          textAlign: "left",
          marginBottom: "5%",
          display: "flex",
          justifyContent: "space-between",
          fontFamily:'Mackinacmini',
          color:'black',
          fontSize:'large'
        }}
      >
        <h3> Account Settings </h3>
      </div>

      <MDBRow style={{ fontFamily:'poppins' }}>
        <MDBCol sm={12} md={3} lg={3} style={{ padding: "1% 3% 3%" }}>
          <MDBTabs
            className="flex-column"
            style={{ textAlign: "left", marginBottom: "5%", color:'grey' , fontSize:'large'}}
          >
            Account
          </MDBTabs>

          <MDBTabs className="flex-column" style={{ textAlign: "left" }}>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab1")}
                active={verticalActive === "tab1"}
              >
                Profile
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab2")}
                active={verticalActive === "tab2"}
              >
                Plans Settings
              </MDBTabsLink>
            </MDBTabsItem>

            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab3")}
                active={verticalActive === "tab3"}
              >
                Notifications
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol sm={12} md={9} lg={9}>
          <MDBTabsContent>
            <MDBTabsPane
              style={{ background: "" }}
              show={verticalActive === "tab1"}
            >
              <Personal />

            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === "tab2"}>
              <AccountPlans />
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === "tab3"}>
                <Notifications/>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </section>
    </>
  );
}
