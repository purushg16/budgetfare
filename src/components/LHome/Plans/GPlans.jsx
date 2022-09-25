import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Plans.css";

import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBIcon,
  MDBModal,
  MDBModalBody,
  MDBModalContent,
  MDBModalDialog,
  MDBModalFooter,
  MDBModalHeader,
  MDBModalTitle,
} from "mdb-react-ui-kit";

import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import axios from "axios";
import Swal from "sweetalert2";
import { Card } from "react-bootstrap";
SwiperCore.use([Keyboard, Mousewheel]);

// import required modules
// import { Pagination } from "swiper";

export default function GPlans() {

  const [bDeals, setBDeals] = useState([])
  const [loaded, isloaded] = useState(false)

  useEffect(() => {

    if (bDeals.length !== 0) {
      isloaded(true);
    } else {

      const headers = {
        'Authorization': window.sessionStorage.getItem('token'),
      };

      axios({
        method: 'get',
        url: 'https://budgetfare.herokuapp.com/user/businessDeals',
        headers: headers,
      }).then((res) => {
        // console.log(typeof(res.data) !== Object);
        if(res.data.err === null) setBDeals(res.data)
        else console.log(bDeals);
      })
      .catch((err) => {
        console.log(err);
        window.sessionStorage.setItem('e', err);
        // if(err)  Swal.fire(`${err.message}`, '', 'info')
        // else     Swal.fire('Added!', '', 'success')
      })
    }
  }, [bDeals, loaded])

  const [scrollableModal, setScrollableModal] = useState(false);

  return (
    <section id="gPlans">
      <h4 style={{ textAlign: "left", margin: "1% 7%" }}> Global Plans </h4>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        mousewheel={{ forceToAxis: "true" }}
        freeMode
        //   direction={'vertical'}
        //   style={{ overflow: "scroll", position: "relative" }}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          500: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          860: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          861: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
      >

        {
          loaded ?
            (bDeals.map((deal) => (

        <SwiperSlide>
            <Card
            style={{
              width: "300px", background:'none', boxShadow:'none',
              borderRadius: "5px",
            }}
          >

            <div className="top-wrapper" style={{ background:'white', boxShadow: '0 6px 10px rgb(0 0 0 / 15%)', borderRadius:'9px' }}>
                   <div style={{position:'relative'}}>
                   <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                      style={{ width: "100%", height: "15rem" }}
                    />
                   </div>

            <Card.Body style={{ textAlign: "left", fontFamily:'poppins', color:'black'}}>
              <Card.Title
                style={{
                  fontWeight: "bold",
                }}
              >
                <h5 style={{ fontWeight: "bold" }}> ${deal.from.name}
                  {/* <span style={{ textDecoration:'line-through', fontSize:'0.8rem' }}> ${deal.usualPrice} </span> 
                  { deal.budgetAirline ? <span style={{ background:'red', padding:'1%', borderRadius:'99px 0px 0px 99px', position:'fixed', right:0, top:1, color:'white', fontSize:'0.7rem', whiteSpace:'nowrap' }}> Budget </span> : null } 
                  { deal.nonStop ? <span style={{ background:'green', padding:'1%', borderRadius:'99px 0px 0px 99px', position:'fixed', right:0, color:'white', fontSize:'0.7rem', whiteSpace:'nowrap' }}> Non Stop </span> : null }
                  */}
                  </h5> 
                </Card.Title>

                <Card.Subtitle className="mb-2 text-muted"
                        style={{ fontWeight: "bold", color:'#0000007d', padding:'2% 0 0'}}
                      >
                      <p style={{color:'black', marginBottom:'0'}}>
                        {" "}
                        <MDBIcon fas icon="plane-departure" style={{paddingRight:'2%'}}/> {deal.to.name}{" "}
                      </p>
                      </Card.Subtitle>            
            </Card.Body>
            </div>

            <hr style={{
                    color: "black",
                    borderTop: '2px dashed #ededed',
                    margin: '0 auto',
                    width: '95%',
                    opacity: '.2',
                   
                  }}></hr>
                  <div className="card-bottom" style={{ 
                    alignItems: 'baseline',
                    padding: '10px 15px 8px 30px',
                    display:'flex', 
                    textAlign: "left", 
                    borderRadius:'9px',
                    justifyContent: 'space-between',
                    marginTop: '-3px',
                    boxShadow: '0 6px 10px rgb(0 0 0 / 15%)',
                    background:'white'
                    }}>
                      <p style={{ fontFamily:'poppins', fontWeight:'bold', fontSize:'1.3rem', color:'black' }} > ${deal.droppedPrice} <span id="aprice" style={{fontSize:'0.7rem', color:'grey', textDecoration:'line-through'}}> ${deal.usualPrice} </span> </p>
                    <a href="#register-form"> <MDBBtn color="success" style={{ 
                      textTransform:'capitalize', 
                      fontFamily:'Poppins',
                      fontWeight:'bold',
                      borderRadius:'15px',
                      boxShadow: '0 6px 10px rgb(0 0 0 / 15%)',
                      padding:'1em'
                      
                    }}
                onClick={() => setScrollableModal(!scrollableModal)}
                    
                    >Get Deals</MDBBtn> </a>
                  </div>
          </Card>
        </SwiperSlide> ))) :

      (
        <p> Deals will be here in a moment! </p>
        // <div className="container">
        //   <div className="row">
        //     <div className="col-lg-4 col-md-4 col-sm-12">
        //       <Skeleton
        //         sx={{ bgcolor: 'white.900' }}
        //         variant="rectangular"
        //       />
        //     </div>
        //     <div className="col-lg-4 col-md-4 col-sm-12">
        //       <Skeleton
        //         sx={{ bgcolor: 'white.900' }}
        //         variant="rectangular"
        //       />
        //     </div>
        //     <div className="col-lg-4 col-md-4 col-sm-12">
        //       <Skeleton
        //         sx={{ bgcolor: 'white.900' }}
        //         variant="rectangular"
        //       />
        //     </div>
        //   </div>
        // </div>
      )

  }
   </Swiper> 

      <MDBModal
        show={scrollableModal}
        setShow={setScrollableModal}
        tabIndex="-1"
      >
        <MDBModalDialog scrollable>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Modal title</MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={() => setScrollableModal(!scrollableModal)}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBCard>
                <MDBCardImage
                  src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
                  position="top"
                  alt="..."
                />
                <MDBCardBody>
                  <MDBCardTitle>Card title</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href="#">Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn
                color="secondary"
                onClick={() => setScrollableModal(!setScrollableModal)}
              >
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </section>
  );
}
