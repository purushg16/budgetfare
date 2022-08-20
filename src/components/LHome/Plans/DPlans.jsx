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
SwiperCore.use([Keyboard, Mousewheel]);

// import required modules
// import { Pagination } from "swiper";

export default function GPlans() {

  const [deals, setDeals] = useState([])
  const [loaded, isloaded] = useState(false)

  useEffect(() => {
    if (deals.length !== 0) {
      isloaded(true);
    } else {

      const headers = {
        'Authorization': window.sessionStorage.getItem('token'),
        "Content-Type": "multipart/form-data",
      };

      axios({
        method: 'get',
        url: 'https://budgetfare.herokuapp.com/user/domesticDeals',
        headers: headers,
      }).then((res) => { 
        console.log(res.data);
        setDeals(res.data)
      })
      .catch((err) => {
        console.log(err);
        window.sessionStorage.setItem('e', err);
        // if(err)  Swal.fire(`${err.message}`, '', 'info')
        // else     Swal.fire('Added!', '', 'success')
      })
    }
  }, [deals, loaded])

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
            (deals.map((deal) => (

        <SwiperSlide>
          <MDBCard
            style={{
              boxShadow: "7px 10px 15px rgb(156 156 156 / 55%)",
              borderRadius: "5px",
            }}
          >
            <MDBCardBody>
              <MDBCardTitle
                style={{
                  textAlign: "left",
                  fontSize: "0.8rem",
                  fontWeight: "600",
                }}
              >
                <h5 style={{ fontWeight: "bold" }}> $567 </h5>
                Rome, Greece
              </MDBCardTitle>
            </MDBCardBody>
            <MDBCardImage
              style={{ borderRadius: "0px 0px 0px 0px", height: "250px" }}
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
            <MDBBtn
              color="light"
              style={{
                borderRadius: "0px 0px 5px 5px",
                color: "green",
                fontSize: "1rem",
                fontStyle: "righteous",
                fontWeight: "bold",
              }}
              onClick={() => setScrollableModal(!scrollableModal)}
            >
              See Deal
            </MDBBtn>
          </MDBCard>
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
