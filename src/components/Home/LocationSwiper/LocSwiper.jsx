import "./LocSwiper.css";
import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import Card from "react-bootstrap/Card";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

import { FreeMode, EffectCoverflow, Pagination } from "swiper";
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
    if (e !== null) {
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

  const swiperRef = useRef(null);

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
                <h3
                  style={{
                    fontWeight: "bold",
                    textAlign: "left",
                    fontFamily: "Mackinac",
                  }}
                >
                  {" "}
                  Check out the latest deals from your airport{" "}
                </h3>
                {/* <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    {" "}
                    <MDBIcon fas icon="search" />{" "}
                  </InputGroup.Text> */}

                <div
                  className="input-group rounded search-group"
                  style={{ flexWrap: "nowrap" }}
                >
                  <span className="input-group-text" id="search-addon">
                    <i className="fas fa-search"></i>
                  </span>

                  <Select
                    // menuIsOpen
                    placeholder="Select by U.S.city, airport or Zipcode"
                    isClearable
                    menuShouldScrollIntoView
                    // menuIsOpen
                    options={options}
                    // value={'query'}
                    onChange={handleCity}
                  />
                </div>
              </Stack>
            </div>
          </MDBCol>
          <MDBCol
            xs={12}
            md={8}
            // onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
            // onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
          >
            <Swiper
              autoplay={{
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              // effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              spaceBetween={30}
              // coverflowEffect={{
              //   rotate: 50,
              //   stretch: 0,
              //   depth: 100,
              //   modifier: 1,
              //   // slideShadows: true,
              // }}
              mousewheel={{
                forceToAxis: true,
                // sensitivity: 100,
                releaseOnEdges: true,
              }}
              freeMode
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >

{/* /* box-shadow: 0 2px 15px -3px rgb(0 0 0 / 7%), 0 10px 20px -2px rgb(0 0 0 / 4%); */}
              <SwiperSlide>
                <Card style={{ width: "300px", background:'none', boxShadow:'none' }}>
                    
                  <div className="top-wrapper" style={{ background:'white', boxShadow: '0 6px 10px rgb(0 0 0 / 15%)', borderRadius:'9px' }}>
                   <div style={{position:'relative'}}>
                   <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                      style={{ width: "100%", height: "15rem" }}
                    />
                   </div>

                    <Card.Body style={{ textAlign: "left", fontFamily:'poppins', color:'black'}}>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        Rome, Greece
                      </Card.Title>

                      <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{ fontWeight: "bold", color:'#0000007d', padding:'2% 0 0'}}
                      >
                      <p style={{color:'black', marginBottom:'0'}}>
                        {" "}
                        <MDBIcon fas icon="plane-departure" style={{paddingRight:'2%'}}/> Barcelona{" "}
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
                      <p style={{ fontFamily:'poppins', fontWeight:'bold', fontSize:'1.3rem', color:'black' }} > $300 <span id="aprice" style={{fontSize:'0.7rem', color:'grey', textDecoration:'line-through'}}> $2000 </span> </p>
                    <a href="#register-form"> <MDBBtn color="success" style={{ 
                      textTransform:'capitalize', 
                      fontFamily:'Poppins',
                      fontWeight:'bold',
                      borderRadius:'15px',
                      boxShadow: '0 6px 10px rgb(0 0 0 / 15%)',
                      padding:'1em'
                    }}>Get Deals</MDBBtn> </a>
                  </div>
                </Card>
              </SwiperSlide>

              <SwiperSlide>
                <Card style={{ width: "300px", background:'none', boxShadow:'none' }}>
                    
                  <div className="top-wrapper" style={{ background:'white', boxShadow: '0 6px 10px rgb(0 0 0 / 15%)', borderRadius:'9px' }}>
                   <div style={{position:'relative'}}>
                   <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                      style={{ width: "100%", height: "15rem" }}
                    />
                   </div>

                    <Card.Body style={{ textAlign: "left", fontFamily:'poppins', color:'black'}}>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        Rome, Greece
                      </Card.Title>

                      <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{ fontWeight: "bold", color:'#0000007d', padding:'2% 0 0'}}
                      >
                      <p style={{color:'black', marginBottom:'0'}}>
                        {" "}
                        <MDBIcon fas icon="plane-departure" style={{paddingRight:'2%'}}/> Barcelona{" "}
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
                      <p style={{ fontFamily:'poppins', fontWeight:'bold', fontSize:'1.3rem', color:'black' }} > $300 <span id="aprice" style={{fontSize:'0.7rem', color:'grey', textDecoration:'line-through'}}> $2000 </span> </p>
                      <a href="#register-form"> <MDBBtn color="success" style={{ 
                      textTransform:'capitalize', 
                      fontFamily:'Poppins',
                      fontWeight:'bold',
                      borderRadius:'15px',
                      boxShadow: '0 6px 10px rgb(0 0 0 / 15%)',
                      padding:'1em'
                    }}>Get Deals</MDBBtn> </a>
                  </div>
                </Card>
              </SwiperSlide>


              <SwiperSlide>
                <Card style={{ width: "300px", background:'none', boxShadow:'none' }}>
                    
                  <div className="top-wrapper" style={{ background:'white', boxShadow: '0 6px 10px rgb(0 0 0 / 15%)', borderRadius:'9px' }}>
                   <div style={{position:'relative'}}>
                   <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                      style={{ width: "100%", height: "15rem" }}
                    />
                   </div>

                    <Card.Body style={{ textAlign: "left", fontFamily:'poppins', color:'black'}}>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        Rome, Greece
                      </Card.Title>

                      <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{ fontWeight: "bold", color:'#0000007d', padding:'2% 0 0'}}
                      >
                      <p style={{color:'black', marginBottom:'0'}}>
                        {" "}
                        <MDBIcon fas icon="plane-departure" style={{paddingRight:'2%'}}/> Barcelona{" "}
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
                      <p style={{ fontFamily:'poppins', fontWeight:'bold', fontSize:'1.3rem', color:'black' }} > $300 <span id="aprice" style={{fontSize:'0.7rem', color:'grey', textDecoration:'line-through'}}> $2000 </span> </p>
                      <a href="#register-form"> <MDBBtn color="success" style={{ 
                      textTransform:'capitalize', 
                      fontFamily:'Poppins',
                      fontWeight:'bold',
                      borderRadius:'15px',
                      boxShadow: '0 6px 10px rgb(0 0 0 / 15%)',
                      padding:'1em'
                    }}>Get Deals</MDBBtn> </a>
                  </div>
                </Card>
              </SwiperSlide>



              <SwiperSlide>
                <Card style={{ width: "300px", background:'none', boxShadow:'none' }}>
                    
                  <div className="top-wrapper" style={{ background:'white', boxShadow: '0 6px 10px rgb(0 0 0 / 15%)', borderRadius:'9px' }}>
                   <div style={{position:'relative'}}>
                   <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cm9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                      style={{ width: "100%", height: "15rem" }}
                    />
                   </div>

                    <Card.Body style={{ textAlign: "left", fontFamily:'poppins', color:'black'}}>
                      <Card.Title style={{ fontWeight: "bold" }}>
                        Rome, Greece
                      </Card.Title>

                      <Card.Subtitle
                        className="mb-2 text-muted"
                        style={{ fontWeight: "bold", color:'#0000007d', padding:'2% 0 0'}}
                      >
                      <p style={{color:'black', marginBottom:'0'}}>
                        {" "}
                        <MDBIcon fas icon="plane-departure" style={{paddingRight:'2%'}}/> Barcelona{" "}
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
                      <p style={{ fontFamily:'poppins', fontWeight:'bold', fontSize:'1.3rem', color:'black' }} > $300 <span id="aprice" style={{fontSize:'0.7rem', color:'grey', textDecoration:'line-through'}}> $2000 </span> </p>
                      <a href="#register-form"> <MDBBtn color="success" style={{ 
                      textTransform:'capitalize', 
                      fontFamily:'Poppins',
                      fontWeight:'bold',
                      borderRadius:'15px',
                      boxShadow: '0 6px 10px rgb(0 0 0 / 15%)',
                      padding:'1em'
                    }}>Get Deals</MDBBtn> </a>
                  </div>
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
