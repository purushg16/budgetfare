import "./LocSwiper.css";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Card from "react-bootstrap/Card";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

import { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { createApi } from "unsplash-js";

import Select from "react-select";
import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
SwiperCore.use([Keyboard, Mousewheel]);

const unsplash = new createApi({
  accessKey: "3DfbEtJCTn211Q85rJbrtECqXYMEes2wA19QXqUSb6A",
});

function LocationSwiper() {
  const [query, setQuery] = useState(null);

  function handleCity(e) {
   
    if(e !== null) {
    setQuery(e.value);
    console.log(query);
    }
  }

  useEffect(() => {
    unsplash.search
      .getPhotos({
        query: "rome",
      })
      .then((result) => {
        // console.log(result.response.results[0].urls.full);
      });
      // console.log(document.querySelector('.react-select-3-listbox'));
  });

  const options = [
    { value: "Albenia", label: "Albenia Airport, Washington D.C, America" },
    { value: "Ohio", label: "Ohio Airport, Washington D.C, America" },
    { value: "Alaska", label: "Alaska Airport, Washington D.C, America" },
    { value: "Indiana", label: "Indiana Airport, Washington D.C, America" },
    { value: "NewYork", label: "NewYork Airport, Washington D.C, America" },
    { value: "Apple", label: "Apple Airport, Washington D.C, America" },
    { value: "Samsung", label: "Samsung Airport, Washington D.C, America" },
    { value: "Hawkings", label: "Hawkings Airport, Washington D.C, America" },
    { value: "Virginia", label: "Virginia Airport, Washington D.C, America" },
  ];

  const swiperRef = useRef(null)

  return (
    <>
      <Container className="LocSwiper">
        <MDBRow>
          <MDBCol
            xs={12}
            md={4}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Stack gap={2} className="MDBCol-md-10 mx-auto search-bar">
                <h3  style={{ fontWeight: 'bold'}} >  Check out the latest deals from your area </h3>
                {/* <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    {" "}
                    <MDBIcon fas icon="search" />{" "}
                  </InputGroup.Text> */}
                <Select
                  // menuIsOpen
                  placeholder='Select City by'
                  isClearable
                  menuShouldScrollIntoView
                  // menuIsOpen
                  options={options}
                  // value={'query'}
                  onChange={handleCity}
                />
              </Stack>
            </div>
          </MDBCol>
          <MDBCol xs={12} md={8}
          // onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
          // onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
          >
            <Swiper
            autoplay={{
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
          }}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                // slideShadows: true,
              }}
              mousewheel={{
                forceToAxis: true,
                // sensitivity: 100,
                releaseOnEdges: true,
            }}
              freeMode
              modules={[EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <Card style={{ width: "300px" }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                    style={{ width: "100%", height: "15rem" }}
                  />
                  <Card.Body>
                    <Card.Title  style={{ fontWeight: 'bold'}}  >Rome, Greece</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted"  style={{ fontWeight: 'bold'}} >
                      $200
                    </Card.Subtitle>
                    <p>
                      {" "}
                      <MDBIcon fas icon="plane-departure" /> Barcelona{" "}
                    </p>
                    <MDBBtn color='success'>Get Deals</MDBBtn>
                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card style={{ width: "300px" }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGFyaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                    style={{ width: "100%", height: "15rem" }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold'}} >Paris, France</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontWeight: 'bold'}} >
                      $300
                    </Card.Subtitle>
                    <p>
                      {" "}
                      <MDBIcon fas icon="plane-departure" /> Barcelona{" "}
                    </p>
                    <MDBBtn color='success'>Get Deals</MDBBtn>

                  </Card.Body>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card style={{ width: "300px" }}>
                  <Card.Img
                    variant="top"
                    src="https://images.unsplash.com/photo-1518563172008-e56c5dfbaef6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bnl8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                    style={{ width: "100%", height: "15rem" }}
                  />
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bold'}} >NY, Washington D.C, America</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted" style={{ fontWeight: 'bold'}} >
                      $599
                    </Card.Subtitle>
                    <p>
                      {" "}
                      <MDBIcon fas icon="plane-departure" /> Barcelona{" "}
                    </p>
                    <MDBBtn color='success'>Get Deals</MDBBtn>

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
