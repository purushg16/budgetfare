import {
  MDBBtn,
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBInput,
  MDBListGroup,
  MDBListGroupItem,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState } from "react";
import AddAirport from "./AddAirport";
import AddDeals from "./AddDeals";
import "./Dashboard.css";
import DeleteAirport from "./DeleteAirport";
import DeleteDeals from "./DeleteDeals";
import LineIcon from "react-lineicons";


export default function Dashboard() {
  const [window, setWindow] = useState("aa");
  const [showNavCentred, setShowNavCentred] = useState(false);

  return (
    <section className="dashboard">
        <div id="control-bar">
          <div className="controls-div g726">
            <div>
              <MDBBtn className='blocky-g' color="danger" onClick={()=>{setWindow('aa')}}><p>  <LineIcon name="plane" /> + <br></br> <span>Add Airport</span> </p> </MDBBtn>
            </div>
            <div>
              <MDBBtn className='blocky-g' color="success"  onClick={()=>{setWindow('da')}}><p>  <LineIcon name="plane" /> - <br></br> <span style={{whiteSpace:'nowrap'}}> Remove Airport</span> </p> </MDBBtn>
            </div>
            <div style={{width:'4%'}}> </div>
            <div>
            <MDBBtn className='blocky-g' color="danger"  onClick={()=>{setWindow('ad')}}><p>  <LineIcon name="add-files" /> <br></br> <span>Add Deals</span> </p> </MDBBtn>
            </div>
            <div>
            <MDBBtn className='blocky-g' color="success"  onClick={()=>{setWindow('dd')}}><p>  <LineIcon name="remove-file" /> <br></br> <span>Remove Deals</span> </p> </MDBBtn>
            </div>
          </div>

          <div className="controls-div l726">
            <div>
              <h4> <LineIcon name="plane" /> Airport</h4>
              <div>
                <MDBBtn color='danger' className='blocky' onClick={()=>{setWindow('aa')}}> <LineIcon name="circle-plus" />  </MDBBtn>
              </div>
              <div>
                <MDBBtn color='success' className='blocky'  onClick={()=>{setWindow('da')}}> <LineIcon name="circle-minus" /> </MDBBtn>
              </div>
            </div>
            <div style={{width:'4%'}}> </div>
            <div>
            <h4>  <LineIcon name="files" />  Deals</h4>
            <div>
                <MDBBtn color='danger' className='blocky' onClick={()=>{setWindow('ad')}}> <LineIcon name="circle-plus" />  </MDBBtn>
              </div>
              <div>
                <MDBBtn color='success' className='blocky'  onClick={()=>{setWindow('dd')}}> <LineIcon name="circle-minus" /> </MDBBtn>
              </div>
            </div>
          </div>
        </div>

      <MDBContainer className="padding" style={{ padding: "5% 3% 2%" }}>
        <MDBContainer className="dash-right">
          {window === "aa" ? (
            <AddAirport />
          ) : window === "da" ? (
            <DeleteAirport />
          ) : window === "ad" ? (
            <AddDeals />
          ) : window === "dd" ? (
            <DeleteDeals />
          ) : null}
        </MDBContainer>
      </MDBContainer>

      {/* <div> <MDBBtn><MDBIcon fas size="2x"  icon='home' /> </MDBBtn> </div> */}
    </section>
  );
}
