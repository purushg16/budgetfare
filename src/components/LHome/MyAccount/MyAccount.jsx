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

export default function MyAccount() {
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  return (
    <section id="my-account">
      <div
        style={{
          textAlign: "left",
          marginBottom: "5%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4> Account Settings </h4>
        <MDBBtn color="info" outline>
          Sign Out
        </MDBBtn>
      </div>

      <MDBRow>
        <MDBCol sm={12} md={4} lg={4} style={{ paddingLeft: "3%" }}>
          <MDBTabs
            className="flex-column"
            style={{ textAlign: "left", marginBottom: "5%" }}
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
        <MDBCol sm={12} md={8} lg={8}>
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
  );
}
