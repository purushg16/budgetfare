import axios from "axios";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useState } from "react";
import Swal from "sweetalert2";

// /admin/addDeal
// token 
// dealType
// fromId
// toId
// usualPrice
// droppedPrice
// budgetAirline
// nonStop
// dealLink




export default function AddDeals() {

  const [dealType, setdealType] = useState('')
  const [fromId, setfromId] = useState('')
  const [toId, settoId] = useState('')
  const [usualPrice, setusualPrice] = useState('')
  const [droppedPrice, setdroppedPrice] = useState('')
  const [budgetAirline, setbudgetAirline] = useState('')
  const [nonStop, setnonStop] = useState('')
  const [dealLink, setdealLink] = useState('')

  const headers = {
    'Authorization': window.sessionStorage.getItem('aToken'),
    "Content-Type": "multipart/form-data",
  };

  function submit(e){
    e.preventDefault();
    console.log('here');
    Swal.fire({
      title: 'Ready to Upload?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
  }).then((result) => {
      if (result.isConfirmed) {
          axios({
            method: 'post',
            url: 'https://budgetfare.herokuapp.com/admin/addAirport',
            data: {
              dealType:dealType,
              fromId:fromId,
              toId:toId,
              usualPrice:usualPrice,
              droppedPrice:droppedPrice,
              budgetAirline:budgetAirline,
              nonStop:nonStop,
              dealLink:dealLink
            },
            headers: headers,
        }).then((res) => { Swal.fire(res.data.msg) })
        .catch((err) => {
          console.log(err);
          window.sessionStorage.setItem('e', err);
          // if(err)  Swal.fire(`${err.message}`, '', 'info')
          // else     Swal.fire('Added!', '', 'success')
        })
       }
      })
  }


    return(
      <form onSubmit={submit}>
      <h3 style={{ marginBottom: "5%", fontWeight: "bold" }}>
        {" "}
        AddAirport{" "}
      </h3>
      <h5>
        {" "}
        Welcome back, Chief <here className=""></here>{" "}
      </h5>
      <MDBInput
        className="mb-4"
        type="text"
        id="form2Example1"
        label="Deal Type*"
        value={dealType}
        onChange={ (e)=>{setdealLink(e.target.value)} }
        required
      />



      <MDBInput
        className="mb-4"
        type="text"
        id="form2Example2"
        label="From ID*"
        value={fromId}
        onChange={ (e)=>{setfromId(e.target.value)} }
        required
      />
      <MDBInput
        className="mb-4"
        type="text"
        id="form2Example2"
        label="To ID*"
        value={toId}
        onChange={ (e)=>{settoId(e.target.value)} }
        required
      />

      <MDBInput
        className="mb-4"
        type="text"
        id="form2Example2"
        label="Usual Price*"
        value={usualPrice}
        onChange={ (e)=>{setusualPrice(e.target.value)} }
        required
      />

      <MDBInput
        className="mb-4"
        type="text"
        id="form2Example2"
        label="Usual Price*"
        value={usualPrice}
        onChange={ (e)=>{setusualPrice(e.target.value)} }
        required
      />

      <MDBInput
        className="mb-4"
        type="text"
        id="form2Example2"
        label="Dropped Price*"
        value={droppedPrice}
        onChange={ (e)=>{setdroppedPrice(e.target.value)} }
        required
      />

<MDBInput
        className="mb-4"
        type="text"
        id="form2Example2"
        label="Budge tAirline*"
        value={budgetAirline}
        onChange={ (e)=>{setbudgetAirline(e.target.value)} }
        required
      />

<MDBInput
        className="mb-4"
        type="text"
        id="form2Example2"
        label="Non Stop*"
        value={nonStop}
        onChange={ (e)=>{setnonStop(e.target.value)} }
        required
      />
      
      <MDBInput
        className="mb-4"
        type="url"
        id="form2Example2"
        label="Deal Link*"
        value={dealLink}
        onChange={ (e)=>{setdealLink(e.target.value)} }
        required
      />

      <MDBBtn
        type="submit"
        className="mb-4"
        color="success"
        style={{ marginTop: "5%" }}
      >
        ADD
      </MDBBtn>
    </form>
    )
}