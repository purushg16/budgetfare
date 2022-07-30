import "./LocSwiper.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import InputGroup from "react-bootstrap/InputGroup";
import { Form } from "react-bootstrap";
import { MDBIcon } from "mdb-react-ui-kit";
import Card from "react-bootstrap/Card";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

function LocationSwiper() {
    
    useEffect( () => {
        console.log('hii')
        console.log(document.querySelector('.swiper-wrapper').style.transform = 'translate3d(-82px, 0px, 0px)');
    } )    

    return (
    <>
      <Container className="LocSwiper">
        <MDBRow>
          <MDBCol xs={12} md={4}  style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
            <div >
              <Stack gap={2} className="MDBCol-md-10 mx-auto">
                Check out the latest deals from your area
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    {" "}
                    <MDBIcon fas icon="search" />{" "}
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search places like Goa, bali"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Stack>
            </div>
          </MDBCol>
          <MDBCol xs={12} md={8}>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card style={{ width: "300px" }}>
                  <Card.Img
                    variant="top"
                    src="https://picsum.photos/500/500"
                    style={{ width: "100%", height: "15rem" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card style={{ width: "300px" }}>
                  <Card.Img
                    variant="top"
                    src="https://picsum.photos/500/500"
                    style={{ width: "100%", height: "15rem" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card style={{ width: "300px" }}>
                  <Card.Img
                    variant="top"
                    src="https://picsum.photos/500/500"
                    style={{ width: "100%", height: "15rem" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </SwiperSlide>
            </Swiper>
          </MDBCol>
        </MDBRow>
      </Container>
    </>
  );
}

export default LocationSwiper;
