import axios from "axios";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


// /admin/deleteAirport
// token 
// code

export default function DeleteAirport() {

  const [ports, fetchPorts] = useState([])
  const [loaded, isloaded] = useState(false)
  // const [err, setErr] = React.useState('')

  const getData = async () => {
    fetch('https://budgetfare.herokuapp.com/user/airports')
      .then((res) => res.json())
      .then((res) => {
        // console.log(res)
        fetchPorts(res)
      })
  }

  useEffect(() => {
    if (ports.length !== 0) {
      isloaded(true);
    }
    getData()
  }, [ports])

  const headers = {
    'Authorization': window.sessionStorage.getItem('aToken'),
    "Content-Type": "multipart/form-data",
  };

  function remove(e){
    e.preventDefault()
    console.log(e.target.value);

    Swal.fire({
      title: 'Ready to Delete?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
  }).then((result) => {
      if (result.isConfirmed) {
          axios({
            method: 'post',
            url: 'https://budgetfare.herokuapp.com/admin/deleteAirport',
            data: {
              code:e.target.value, 
            },
            headers: headers,
        }).then((res) => { Swal.fire(res.data.msg) })
        .catch((err) => {
          console.log(err);
          window.sessionStorage.setItem('e', err);
          if(err)  Swal.fire(`${err.message}`, '', 'info')
          else     Swal.fire('Added!', '', 'success')
        })
       }
      })

  }

    return(
      <section id='edit-section'>
         {loaded ?

        <table className="table align-middle mb-0 bg-white">
          <thead className="bg-light">
            <tr>
              <th> Image </th>
              <th> Name </th>
              <th> Action </th>

            </tr>
          </thead>


          <tbody>
            {(ports.map((port) => (

              <tr>
                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={`https://sweetcups-server.herokuapp.com/images/${port.airportImg}`}
                      alt=""
                      style={{ width: '70px', height: '70px' }}
                      className="rounded-circle"
                    />
                  </div>
                </td>

                <td>
                  <div className="ms-3">
                    <p className="fw-bold mb-1"> {port.airportName} </p>
                  </div>
                </td>

                <td>
                  <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={remove} value={port.code} aria-label={port.cakeImgUrl} >
                    Delete
                  </button>
                </td>
              </tr>

            )))}

          </tbody>
        </table>
        :
        <div>
          <h6> Your Airports will be here in a moment! </h6>
          <img style={{width:'30%'}} src='https://cdn.dribbble.com/users/1186261/screenshots/3718681/_______.gif' alt='' />
        </div>
      }
    </section>
    )
}