import {MDBBtn, MDBContainer} from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import AddAirport from "./AddAirport";
import AddDeals from "./AddDeals";
import "./Dashboard.css";
import DeleteAirport from "./DeleteAirport";
import DeleteDeals from "./DeleteDeals";
import LineIcon from "react-lineicons";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {
  const [aWindow, setWindow] = useState("aa");
  const [ports, fetchPorts] = useState([])
  const [loaded, isloaded] = useState(false)

  const navigate = useNavigate();

  function signOut(){
    window.sessionStorage.removeItem('aToken');
    window.location.reload();
  }

  const getData = async () => {
    fetch('https://budgetfare.herokuapp.com/admin/viewAirport')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        fetchPorts(res)
        window.sessionStorage.setItem('airports', JSON.stringify(res))
      })
  }

  useEffect(() => {
    if (ports.length !== 0) {
      isloaded(true);
    }
      getData()
  }, [ports])

  useEffect(()=>{
    if(window.sessionStorage.getItem("aToken")===null) {
        return navigate('/admin');
    }
})  

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
      <div style={{ display:'flex', justifyContent:'right', marginBottom:'2%' }} > 
        <MDBBtn color="danger" onClick={signOut}> Sign Out </MDBBtn> 
      </div>

        <MDBContainer className="dash-right">
          {aWindow === "aa" ? (
            <AddAirport />
          ) : aWindow === "da" ? (
            <DeleteAirport />
          ) : aWindow === "ad" ? (
            <AddDeals />
          ) : aWindow === "dd" ? (
            <DeleteDeals />
          ) : null}
        </MDBContainer>
      </MDBContainer>

      {/* <div> <MDBBtn><MDBIcon fas size="2x"  icon='home' /> </MDBBtn> </div> */}
    </section>
  );
}
