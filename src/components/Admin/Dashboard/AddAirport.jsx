import axios from "axios";
import { MDBBtn, MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";
import { useState } from "react";
import qs from "qs";
import Swal from "sweetalert2";

// /admin/addAirport
// token
// airportName
// code
// airportImg

export default function AddAirport() {
  const [aName, setAName] = useState("");
  const [aCode, setCode] = useState("");
  const [img, setImg] = useState();

  const handleImg = (event) => {
    setImg(event.target.files[0]);
  };

  const headers = {
    Authorization: window.sessionStorage.getItem("aToken"),
    "Content-Type": "multipart/form-data",
  };

  function submit(e) {
    e.preventDefault();
    console.log("here");
    Swal.fire({
      title: "Ready to Upload?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "post",
          url: "https://budgetfare.herokuapp.com/admin/addAirport",
          data: {
            airportName: aName,
            code: aCode,
            airportImg: img,
          },
          headers: headers,
        })
          .then((res) => {
            Swal.fire(res.data.msg, '', 'success');
          })
          .catch((err) => {
            console.log(err);
            window.sessionStorage.setItem("e", err);
            if (err) Swal.fire(`${err.message}`, "", "info");
            else Swal.fire("Added!", "", "success");
          });
      }
    });
  }

  return (
    <form onSubmit={submit}>
      <h3 style={{ marginBottom: "5%", fontWeight: "bold" }}> AddAirport </h3>
      <h5>
        {" "}
        Welcome back, Chief <here className=""></here>{" "}
      </h5>
      <MDBInput
        className="mb-4"
        type="text"
        id="form2Example1"
        label="Airport Name*"
        value={aName}
        onChange={(e) => {
          setAName(e.target.value);
        }}
        required
      />

      <MDBInput
        className="mb-4"
        type="text"
        id="form2Example2"
        label="CODE*"
        value={aCode}
        onChange={(e) => {
          setCode(e.target.value);
        }}
        required
      />


        <div>
        <MDBRow className='g-3 align-items-center'>
        <MDBCol size="auto">
          <span id='textExample2'> 
             Choose Image File:      
            </span>
        </MDBCol>
        <MDBInput
          type="file"
          accept="image/*"
          onChange={handleImg}
          required
        />
      </MDBRow>


        </div>



      <MDBBtn
        type="submit"
        className="mb-4"
        color="success"
        style={{ marginTop: "5%" }}
      >
        ADD
      </MDBBtn>
    </form>
  );
}
