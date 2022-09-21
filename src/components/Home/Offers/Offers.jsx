import { Swiper, SwiperSlide } from "swiper/react";
import { createApi } from "unsplash-js";

import "./offers.css";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBIcon,
  MDBCardText,
} from "mdb-react-ui-kit";

import SwiperCore, { Keyboard, Mousewheel } from "swiper/core";
import { Card } from "react-bootstrap";
import { FreeMode, Pagination } from "swiper";
SwiperCore.use([Keyboard, Mousewheel]);

const unsplash = new createApi({
  accessKey: "3DfbEtJCTn211Q85rJbrtECqXYMEes2wA19QXqUSb6A",
});

export default function Offers() {
  return (
    <section id="offers-sec">
      <div className="inner-wrapper" style={{padding:'5% 0'}}>
        <h3 style={{ marginBottom: "7%", fontWeight: "bold", fontFamily:'Mackinac' }}>
          <p>BudgetFare users have been to some </p>
          <p>amazing places <span className="orange"> – at amazing prices! </span> </p>
        </h3>

        <Swiper
          autoplay={{
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          grabCursor={true}
          // centeredSlides={true}
          slidesPerView={"auto"}
          spaceBetween={70}
          mousewheel={{
            forceToAxis: true,
            releaseOnEdges: true,
          }}
          freeMode
          modules={[FreeMode, Pagination]}
          className="mySwiper"
          style={{ margin: "1% 2%", height:'inherit' }}
        >
          <SwiperSlide style={{ width: "16.5em" }}>

          <div>
            <MDBCard
              style={{
                height: "21em",
                "box-shadow": "12px 15px 20px 0px rgb(0 0 0 / 26%)",
              }}
            >
              <MDBCardBody>
                <MDBCardText
                  style={{
                    textAlign: "left",
                    fontWeight: "blod",
                    fontFamily: "poppins",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1.5rem",
                    }}
                  >
                    {" "}
                    $300{" "}
                    <span
                      style={{
                        fontWeight: "normal",
                        color: "grey",
                        textDecoration: "line-through",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      $500{" "}
                    </span>{" "}
                  </h3>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "bold",
                      color: "#80808087",
                      fontSize: "0.8em",
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </p>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage
                style={{
                  width: "100%",
                  borderRadius: "0 0 9px 9px",
                  height: "100%",
                }}
                src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                alt="..."
                position="top"
              />
            </MDBCard>
              <div style={{ textAlign:'left', padding:'7% 0 3%' }}>
                    <p> <MDBIcon fas icon="star" style={{color:'gold'}} /> <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} /> </p>
                    <p style={{ fontFamily:'poppins', fontSize:'14px' }}> "We had some leftover 💶 from our Italy 🇮🇹 trip we needed to use up, so when we heard there was an awesome deal on flights to London 🇬🇧 (Thanks @FareDrop) we decided to book it! Taking the kids on their first overseas flight will be an awesome adventure, we can’t wait until October!! #Havekidswilltravel #London2019" </p>
                    <p style={{ fontWeight:'bold', fontFamily:'poppins' }}>  @puryshhere </p>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide style={{ width: "16.5em" }}>

<div>
  <MDBCard
    style={{
      height: "21em",
      "box-shadow": "12px 15px 20px 0px rgb(0 0 0 / 26%)",
    }}
  >
    <MDBCardBody>
      <MDBCardText
        style={{
          textAlign: "left",
          fontWeight: "blod",
          fontFamily: "poppins",
        }}
      >
        <h3
          style={{
            fontWeight: "bold",
            color: "black",
            fontSize: "1.5rem",
          }}
        >
          {" "}
          $300{" "}
          <span
            style={{
              fontWeight: "normal",
              color: "grey",
              textDecoration: "line-through",
              fontSize: "1rem",
            }}
          >
            {" "}
            $500{" "}
          </span>{" "}
        </h3>
        <p
          style={{
            marginBottom: "0",
            fontWeight: "bold",
            color: "#80808087",
            fontSize: "0.8em",
          }}
        >
          {" "}
          London, United Kingdom{" "}
        </p>
      </MDBCardText>
    </MDBCardBody>
    <MDBCardImage
      style={{
        width: "100%",
        borderRadius: "0 0 9px 9px",
        height: "100%",
      }}
      src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
      alt="..."
      position="top"
    />
  </MDBCard>
    <div style={{ textAlign:'left', padding:'7% 0 3%' }}>
          <p> <MDBIcon fas icon="star" style={{color:'gold'}} /> <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} /> </p>
          <p style={{ fontFamily:'poppins', fontSize:'14px' }}> "We had some leftover 💶 from our Italy 🇮🇹 trip we needed to use up, so when we heard there was an awesome deal on flights to London 🇬🇧 (Thanks @FareDrop) we decided to book it! Taking the kids on their first overseas flight will be an awesome adventure, we can’t wait until October!! #Havekidswilltravel #London2019" </p>
          <p style={{ fontWeight:'bold', fontFamily:'poppins' }}>  @puryshhere </p>
      </div>
  </div>
</SwiperSlide>

<SwiperSlide style={{ width: "16.5em" }}>

          <div>
            <MDBCard
              style={{
                height: "21em",
                "box-shadow": "12px 15px 20px 0px rgb(0 0 0 / 26%)",
              }}
            >
              <MDBCardBody>
                <MDBCardText
                  style={{
                    textAlign: "left",
                    fontWeight: "blod",
                    fontFamily: "poppins",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1.5rem",
                    }}
                  >
                    {" "}
                    $300{" "}
                    <span
                      style={{
                        fontWeight: "normal",
                        color: "grey",
                        textDecoration: "line-through",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      $500{" "}
                    </span>{" "}
                  </h3>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "bold",
                      color: "#80808087",
                      fontSize: "0.8em",
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </p>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage
                style={{
                  width: "100%",
                  borderRadius: "0 0 9px 9px",
                  height: "100%",
                }}
                src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                alt="..."
                position="top"
              />
            </MDBCard>
              <div style={{ textAlign:'left', padding:'7% 0 3%' }}>
                    <p> <MDBIcon fas icon="star" style={{color:'gold'}} /> <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} /> </p>
                    <p style={{ fontFamily:'poppins', fontSize:'14px' }}> "Thank Kara & Nate! We love FareDrop! We just booked a trip to Frankfurt to see family in October! $763 round trip for us all to fly 🙉🙊🤗" </p>
                    <p style={{ fontWeight:'bold', fontFamily:'poppins' }}>  @puryshhere </p>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide style={{ width: "16.5em" }}>

          <div>
            <MDBCard
              style={{
                height: "21em",
                "box-shadow": "12px 15px 20px 0px rgb(0 0 0 / 26%)",
              }}
            >
              <MDBCardBody>
                <MDBCardText
                  style={{
                    textAlign: "left",
                    fontWeight: "blod",
                    fontFamily: "poppins",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1.5rem",
                    }}
                  >
                    {" "}
                    $300{" "}
                    <span
                      style={{
                        fontWeight: "normal",
                        color: "grey",
                        textDecoration: "line-through",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      $500{" "}
                    </span>{" "}
                  </h3>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "bold",
                      color: "#80808087",
                      fontSize: "0.8em",
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </p>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage
                style={{
                  width: "100%",
                  borderRadius: "0 0 9px 9px",
                  height: "100%",
                }}
                src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                alt="..."
                position="top"
              />
            </MDBCard>
              <div style={{ textAlign:'left', padding:'7% 0 3%' }}>
                    <p> <MDBIcon fas icon="star" style={{color:'gold'}} /> <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} /> </p>
                    <p style={{ fontFamily:'poppins', fontSize:'14px' }}> "Just booked a flight to Singapore for over $400 under the regular price using FareDrop! Can’t wait to check this off my bucket list! #faredrop @karaandnate" </p>
                    <p style={{ fontWeight:'bold', fontFamily:'poppins' }}>  @puryshhere </p>
                </div>
            </div>
          </SwiperSlide>

          <SwiperSlide style={{ width: "16.5em" }}>

          <div>
            <MDBCard
              style={{
                height: "21em",
                "box-shadow": "12px 15px 20px 0px rgb(0 0 0 / 26%)",
              }}
            >
              <MDBCardBody>
                <MDBCardText
                  style={{
                    textAlign: "left",
                    fontWeight: "blod",
                    fontFamily: "poppins",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1.5rem",
                    }}
                  >
                    {" "}
                    $300{" "}
                    <span
                      style={{
                        fontWeight: "normal",
                        color: "grey",
                        textDecoration: "line-through",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      $500{" "}
                    </span>{" "}
                  </h3>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "bold",
                      color: "#80808087",
                      fontSize: "0.8em",
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </p>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage
                style={{
                  width: "100%",
                  borderRadius: "0 0 9px 9px",
                  height: "100%",
                }}
                src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                alt="..."
                position="top"
              />
            </MDBCard>
              <div style={{ textAlign:'left', padding:'7% 0 3%' }}>
                    <p> <MDBIcon fas icon="star" style={{color:'gold'}} /> <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} /> </p>
                    <p style={{ fontFamily:'poppins', fontSize:'14px' }}> "First @faredrop flight Den - Beijing thanks @karaandnate rt on United $311!!" </p>
                    <p style={{ fontWeight:'bold', fontFamily:'poppins' }}>  @puryshhere </p>
                </div>
            </div>
          </SwiperSlide>


          <SwiperSlide style={{ width: "16.5em" }}>

          <div>
            <MDBCard
              style={{
                height: "21em",
                "box-shadow": "12px 15px 20px 0px rgb(0 0 0 / 26%)",
              }}
            >
              <MDBCardBody>
                <MDBCardText
                  style={{
                    textAlign: "left",
                    fontWeight: "blod",
                    fontFamily: "poppins",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1.5rem",
                    }}
                  >
                    {" "}
                    $300{" "}
                    <span
                      style={{
                        fontWeight: "normal",
                        color: "grey",
                        textDecoration: "line-through",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      $500{" "}
                    </span>{" "}
                  </h3>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "bold",
                      color: "#80808087",
                      fontSize: "0.8em",
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </p>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage
                style={{
                  width: "100%",
                  borderRadius: "0 0 9px 9px",
                  height: "100%",
                }}
                src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                alt="..."
                position="top"
              />
            </MDBCard>
              <div style={{ textAlign:'left', padding:'7% 0 3%' }}>
                    <p> <MDBIcon fas icon="star" style={{color:'gold'}} /> <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} /> </p>
                    <p style={{ fontFamily:'poppins', fontSize:'14px' }}> "FareDrop is so cool! We’re broke college students, so finding these tickets for cheap is insane! Grand total Boston to Madrid to Milan and back to Boston was around $450" </p>
                    <p style={{ fontWeight:'bold', fontFamily:'poppins' }}>  @puryshhere </p>
                </div>
            </div>
          </SwiperSlide>



          <SwiperSlide style={{ width: "16.5em" }}>

          <div>
            <MDBCard
              style={{
                height: "21em",
                "box-shadow": "12px 15px 20px 0px rgb(0 0 0 / 26%)",
              }}
            >
              <MDBCardBody>
                <MDBCardText
                  style={{
                    textAlign: "left",
                    fontWeight: "blod",
                    fontFamily: "poppins",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1.5rem",
                    }}
                  >
                    {" "}
                    $300{" "}
                    <span
                      style={{
                        fontWeight: "normal",
                        color: "grey",
                        textDecoration: "line-through",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      $500{" "}
                    </span>{" "}
                  </h3>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "bold",
                      color: "#80808087",
                      fontSize: "0.8em",
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </p>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage
                style={{
                  width: "100%",
                  borderRadius: "0 0 9px 9px",
                  height: "100%",
                }}
                src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                alt="..."
                position="top"
              />
            </MDBCard>
              <div style={{ textAlign:'left', padding:'7% 0 3%' }}>
                    <p> <MDBIcon fas icon="star" style={{color:'gold'}} /> <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} /> </p>
                    <p style={{ fontFamily:'poppins', fontSize:'14px' }}> "Scored a family of four trip to Ireland from Seattle for under $1600, thanks @karaandnate for #Faredrop" </p>
                    <p style={{ fontWeight:'bold', fontFamily:'poppins' }}>  @puryshhere </p>
                </div>
            </div>
          </SwiperSlide>


          <SwiperSlide style={{ width: "16.5em" }}>

          <div>
            <MDBCard
              style={{
                height: "21em",
                "box-shadow": "12px 15px 20px 0px rgb(0 0 0 / 26%)",
              }}
            >
              <MDBCardBody>
                <MDBCardText
                  style={{
                    textAlign: "left",
                    fontWeight: "blod",
                    fontFamily: "poppins",
                  }}
                >
                  <h3
                    style={{
                      fontWeight: "bold",
                      color: "black",
                      fontSize: "1.5rem",
                    }}
                  >
                    {" "}
                    $300{" "}
                    <span
                      style={{
                        fontWeight: "normal",
                        color: "grey",
                        textDecoration: "line-through",
                        fontSize: "1rem",
                      }}
                    >
                      {" "}
                      $500{" "}
                    </span>{" "}
                  </h3>
                  <p
                    style={{
                      marginBottom: "0",
                      fontWeight: "bold",
                      color: "#80808087",
                      fontSize: "0.8em",
                    }}
                  >
                    {" "}
                    London, United Kingdom{" "}
                  </p>
                </MDBCardText>
              </MDBCardBody>
              <MDBCardImage
                style={{
                  width: "100%",
                  borderRadius: "0 0 9px 9px",
                  height: "100%",
                }}
                src="https://mdbootstrap.com/img/new/standard/nature/182.webp"
                alt="..."
                position="top"
              />
            </MDBCard>
              <div style={{ textAlign:'left', padding:'7% 0 3%' }}>
                    <p> <MDBIcon fas icon="star" style={{color:'gold'}} /> <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} />  <MDBIcon fas icon="star" style={{color:'gold'}} /> </p>
                    <p style={{ fontFamily:'poppins', fontSize:'14px' }}>"Hello Nate and Kara! I just booked a flight to Madrid from Fayetteville, AR for $555, normally $1150! And it’s a Delta flight so more Skymiles for me😁! It would have been $535 if I hadn’t waited a day also. I’m so excited to visit Spain and couldn’t have found this great deal without FareDrop." </p>
                    <p style={{ fontWeight:'bold', fontFamily:'poppins' }}>  @puryshhere </p>
                </div>
            </div>
          </SwiperSlide>


        </Swiper>
      </div>
    </section>
  );
}
