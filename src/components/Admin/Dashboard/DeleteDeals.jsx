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


  useEffect(() => {
    if (deals.length !== 0) isloaded(true);
    else isloaded(false);
    
    const getData = async () => {
      const headers = {
        'Authorization': window.sessionStorage.getItem('aToken'),
      };
      
        axios({
          method: 'get',
          url: 'https://budgetfare.herokuapp.com/admin/viewDeals',
          headers: headers,
            }).then( (res) => {
              setDeals(res.data)
              // console.log(res.data);
              // console.log(res.data[0]);
              console.log(deals);
        } ) 
            .catch( (e) => {
                console.log(e.message);
                // setErr(e.message);
            // if(e)  Swal.fire(`${e.message}`, '', 'info')
            // else     Swal.fire('Added!', '', 'success')
            })
    }
    getData()
  }, [deals,])

  const headers = {
    'Authorization': window.sessionStorage.getItem('aToken'),
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
            url: 'https://budgetfare.herokuapp.com/admin/deleteDeal',
            data: {
              id: e.target.value, 
            },
            headers: headers,
        }).then((res) => { 
          console.log(res);
          Swal.fire(res.data.msg) 
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
                    <p> {deal.from.name} </p>
                  </div>
                </td>

                <td>
                  <div className="d-flex align-items-center justify-content-center">
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