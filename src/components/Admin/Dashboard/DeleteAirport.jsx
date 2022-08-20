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
    fetch('https://budgetfare.herokuapp.com/admin/viewAirport')
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchPorts(res)
        // window.sessionStorage.setItem('airports', {res})
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
  };

  function remove(e){
    console.log(e.target.ariaLabel);

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
              code: e.target.ariaLabel 
            },
            headers: headers,
        }).then((res) => { 
          console.log(res);
          console.log(res.data.msg);
          if (res.data.msg) Swal.fire(`${res.data.msg}`, '', 'info')
          else Swal.fire(res.data.msg, '', 'success')
        })
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
                      src={`https://budgetfare.herokuapp.com/user/images/${port.imgUrl}`}
                      alt=""
                      style={{ width: '70px', height: '70px' }}
                      className="rounded-circle"
                    />
                  </div>
                </td>

                <td>
                  <div className="ms-3">
                    <p className="fw-bold mb-1"> {port.name} </p>
                  </div>
                </td>

                <td>
                  <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={remove} value={port.code} aria-label={port.code} >
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