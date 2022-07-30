import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "./offers.css";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
} from "mdb-react-ui-kit";

export default function Offers() {
  return (
    <section id="offers-sec">
      <h4>
        BudgetFare users have been to some amazing places – at amazing prices!
      </h4>

      <Swiper watchSlidesProgress={true} spaceBetween={50} autoHeight={true} slidesPerView={3} className="mySwiper offer-swiper">
        <SwiperSlide>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </SwiperSlide>
        <SwiperSlide>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </SwiperSlide>
        <SwiperSlide>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </SwiperSlide>
        <SwiperSlide>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </SwiperSlide>

        <SwiperSlide>
          <MDBCard>
            <MDBCardImage
              src="https://mdbootstrap.com/img/new/standard/city/041.webp"
              alt="..."
              position="top"
            />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter>
              <small className="text-muted">Last updated 3 mins ago</small>
            </MDBCardFooter>
          </MDBCard>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
}
