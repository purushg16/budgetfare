import { Swiper, SwiperSlide } from "swiper/react";
import { createApi } from "unsplash-js";

import "./offers.css";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
} from "mdb-react-ui-kit";

const unsplash = new createApi({
  accessKey: "3DfbEtJCTn211Q85rJbrtECqXYMEes2wA19QXqUSb6A",
});


export default function Offers() {
  return (
    <section id="offers-sec">
      <h3 style={{ marginBottom: "7%", fontWeight: 'bold' }} >
        BudgetFare users have been to some amazing places – at amazing prices!
      </h3>

      <Swiper
        // watchSlidesProgress={true}
        spaceBetween={50}
        autoHeight={true}
        slidesPerView={3}
        className="mySwiper offer-swiper"
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
        <SwiperSlide>
          <MDBCard style={{ boxShadow: '7px 10px 15px rgb(156 156 156 / 55%)', borderRadius: '5px' }}>
            <MDBCardBody>
              <MDBCardTitle style={{ textAlign: 'left', fontSize: '0.8rem', fontWeight: '600' }}>
                <h5 style={{ fontWeight: 'bold' }}> $567 </h5> 
                Rome, Greece
              </MDBCardTitle>
            </MDBCardBody>
            <MDBCardImage
              style={{ borderRadius: "0px 0px 5px 5px", height: '250px' }}
              src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
          </MDBCard>
        </SwiperSlide>

        <SwiperSlide>
          <MDBCard style={{ boxShadow: '7px 10px 15px rgb(156 156 156 / 55%)', borderRadius: '5px' }}>
            <MDBCardBody>
              <MDBCardTitle style={{ textAlign: 'left', fontSize: '0.8rem', fontWeight: '600' }}>
                <h5 style={{ fontWeight: 'bold' }}> $567 </h5> 
                Paris, France
              </MDBCardTitle>
            </MDBCardBody>
            <MDBCardImage
              style={{ borderRadius: "0px 0px 5px 5px", height: '250px' }}
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
          </MDBCard>
        </SwiperSlide>

        <SwiperSlide>
          <MDBCard style={{ boxShadow: '7px 10px 15px rgb(156 156 156 / 55%)', borderRadius: '5px' }}>
            <MDBCardBody>
              <MDBCardTitle style={{ textAlign: 'left', fontSize: '0.8rem', fontWeight: '600' }}>
                <h5 style={{ fontWeight: 'bold' }}> $567 </h5> 
                NY, America
              </MDBCardTitle>
            </MDBCardBody>
            <MDBCardImage
              style={{ borderRadius: "0px 0px 5px 5px", height: '250px' }}
              src="https://images.unsplash.com/photo-1518563172008-e56c5dfbaef6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
          </MDBCard>
        </SwiperSlide>

        <SwiperSlide>
          <MDBCard style={{ boxShadow: '7px 10px 15px rgb(156 156 156 / 55%)', borderRadius: '5px' }}>
            <MDBCardBody>
              <MDBCardTitle style={{ textAlign: 'left', fontSize: '0.8rem', fontWeight: '600' }}>
                <h5 style={{ fontWeight: 'bold' }}> $567 </h5> 
                Morocco, Russia
              </MDBCardTitle>
            </MDBCardBody>
            <MDBCardImage
              style={{ borderRadius: "0px 0px 5px 5px", height: '250px' }}
              src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9yb2Njb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
          </MDBCard>
        </SwiperSlide>


        <SwiperSlide>
          <MDBCard style={{ boxShadow: '7px 10px 15px rgb(156 156 156 / 55%)', borderRadius: '5px' }}>
            <MDBCardBody>
              <MDBCardTitle style={{ textAlign: 'left', fontSize: '0.8rem', fontWeight: '600' }}>
                <h5 style={{ fontWeight: 'bold' }}> $567 </h5> 
                 Netherlands
              </MDBCardTitle>
            </MDBCardBody>
            <MDBCardImage
              style={{ borderRadius: "0px 0px 5px 5px", height: '250px' }}
              src="https://images.unsplash.com/photo-1605704320412-5c3255bf47a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmV0aGVybGFuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
          </MDBCard>
        </SwiperSlide>


        <SwiperSlide>
          <MDBCard style={{ boxShadow: '7px 10px 15px rgb(156 156 156 / 55%)', borderRadius: '5px' }}>
            <MDBCardBody>
              <MDBCardTitle style={{ textAlign: 'left', fontSize: '0.8rem', fontWeight: '600' }}>
                <h5 style={{ fontWeight: 'bold' }}> $567 </h5> 
                Agra, India
              </MDBCardTitle>
            </MDBCardBody>
            <MDBCardImage
              style={{ borderRadius: "0px 0px 5px 5px", height: '250px' }}
              src="https://images.unsplash.com/photo-1587135941948-670b381f08ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFqJTIwbWFoYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
          </MDBCard>
        </SwiperSlide>

        <SwiperSlide>
          <MDBCard style={{ boxShadow: '7px 10px 15px rgb(156 156 156 / 55%)', borderRadius: '5px' }}>
            <MDBCardBody>
              <MDBCardTitle style={{ textAlign: 'left', fontSize: '0.8rem', fontWeight: '600' }}>
                <h5 style={{ fontWeight: 'bold' }}> $567 </h5> 
                Pakistan
              </MDBCardTitle>
            </MDBCardBody>
            <MDBCardImage
              style={{ borderRadius: "0px 0px 5px 5px", height: '250px' }}
              src="https://images.unsplash.com/photo-1470756544705-1848092fbe5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFraXN0YW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
          </MDBCard>
        </SwiperSlide>

        <SwiperSlide>
          <MDBCard style={{ boxShadow: '7px 10px 15px rgb(156 156 156 / 55%)', borderRadius: '5px' }}>
            <MDBCardBody>
              <MDBCardTitle style={{ textAlign: 'left', fontSize: '0.8rem', fontWeight: '600' }}>
                <h5 style={{ fontWeight: 'bold' }}> $567 </h5> 
                Tokyo, Japan
              </MDBCardTitle>
            </MDBCardBody>
            <MDBCardImage
              style={{ borderRadius: "0px 0px 5px 5px", height: '250px' }}
              src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dG9reW98ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
              alt="..."
              position="top"
            />
          </MDBCard>
        </SwiperSlide>

        
      </Swiper>
    </section>
  );
}
