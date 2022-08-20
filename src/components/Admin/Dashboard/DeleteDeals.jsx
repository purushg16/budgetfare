import axios from "axios";
import { MDBBtn, MDBInput } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";


// /admin/deleteDeal
// token
// mongoId


export default function DeleteDeals() {

  const [mongoId, setMongoID] = useState('')
  
  const [deals, setDeals] = useState([])
  const [loaded, isloaded] = useState(false)
  // const [err, setErr] = React.useState('')

  const getData = async () => {
    const headers = {
      'Authorization': window.sessionStorage.getItem('token') || window.sessionStorage.getItem('aToken'),
      "Content-Type": "multipart/form-data",
    };
    
      axios({
        method: 'get',
        url: 'https://budgetfare.herokuapp.com/user/internationalDeals',
        headers: headers,
          }).then( (res) => setDeals(res.data) ) 
          .catch( (e) => {
              console.log(e.message);
              // setErr(e.message);
          // if(e)  Swal.fire(`${e.message}`, '', 'info')
          // else     Swal.fire('Added!', '', 'success')
          })
  }

  useEffect(() => {
    if (deals.length !== 0) {
      isloaded(true);
    }
    getData()
  }, [deals])

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
            url: 'https://budgetfare.herokuapp.com//admin/deleteAirport',
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
              <th> From </th>
              <th> To </th>
              <th> Action </th>

            </tr>
          </thead>


          <tbody>
            {(deals.map((deal) => (

              <tr>

              <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={`https://sweetcups-server.herokuapp.com/images/${deal.from.imgUrl}`}
                      alt=""
                      style={{ width: '70px', height: '70px' }}
                      className="rounded-circle"
                    />
                    <p> {deal.from.name} </p>
                  </div>
                </td>

                <td>
                  <div className="d-flex align-items-center justify-content-center">
                    <img
                      src={`https://sweetcups-server.herokuapp.com/images/${deal.to.imgUrl}`}
                      alt=''
                      style={{ width: '70px', height: '70px' }}
                      className="rounded-circle"
                    />
                    <p style={{ fontSize:'0.8rem' }}> {deal.to.name} </p>
                  </div>
                </td>

                <td>
                  <button type="button" className="btn btn-link btn-sm btn-rounded" onClick={remove} value={deal._id} aria-label={deal._id} >
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