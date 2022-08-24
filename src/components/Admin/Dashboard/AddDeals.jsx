import axios from "axios";
import {
  MDBBtn,
  MDBCheckbox,
  MDBCol,
  MDBInput,
  MDBRow,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useEffect } from "react";
import { useState } from "react";
import { Stack } from "react-bootstrap";
import Select from "react-select";
import Swal from "sweetalert2";
import "./Dashboard.css";

// /admin/addDeal
// token
// dealType
// fromId
// toId
// usualPrice
// droppedPrice
// budgetAirline
// nonStop
// dealLink

export default function AddDeals() {
  const [dealType, setdealType] = useState("Deal Type");
  const [fromId, setfromId] = useState("");
  const [toId, settoId] = useState("");
  const [usualPrice, setusualPrice] = useState("");
  const [droppedPrice, setdroppedPrice] = useState("");
  const [budgetAirline, setbudgetAirline] = useState(false);
  const [nonStop, setnonStop] = useState(false);

  const [sMonths, setSMonths] = useState(() => []);
  const [canSubmit, setCanSubmit] = useState();

  // const [link, setLink] = useState({
  //   month: String,
  //   dealUrl: [],
  // });

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "june",
    "july",
    "aug",
    "sept",
    "oct",
    "nov",
    "dec",
  ];

  var options = JSON.parse(sessionStorage.getItem("airports"));
  // console.log(options);

  var fromAirport = [];

  options.forEach((element, i) => {
    const airportData = { value: element._id, label: element.name };
    fromAirport.push(airportData);
    // console.log(i);
    // console.log(element);
  });

  // console.log(fromAirport);
  var toAirport = fromAirport;

  //   const [prices, setPrice] = useState([{
  //     'month': '',
  //     'link': ''
  //  }])

  //  const handlePrice = (e) => {
  //    setPrice((preV) => [
  //        ...preV,
        //  {
        //    'month': e.target.name,
        //    'link': String(e.target.value)
        //  },
  //      ])
  // }

  const [dealLink, setDLink] = useState([]);
  const [link, setLink] = useState({ month : String, link: String  })
  const [index, setIndex] = useState();

  const handlePrice = (e) => {

    // const updatedLink = [...dealLink];
    setIndex(Number(e.target.getAttribute('label')));
    // console.log(e.target.getAttribute('label'));
    // console.log(updatedLink);

    const newLink =  {
      month: e.target.name,
      link: String(e.target.value),
    } 

    setLink( (oldLink) => ({
      ...oldLink,
      ...newLink,
    }))
    console.log(index);

    setDLink(oldArray => 
      [ ...oldArray,
        (oldArray[index] === undefined) ? newLink : oldArray[index]['link'] = e.target.value
      ]);

    // console.log(index, dealLink[index]);
    
  };

  const handleMonth = (e) => {
    if (e.target.checked) {
      // console.log(e.target.value);
      setSMonths((prev) => [...prev, e.target.value]);
    } else {
      setSMonths(sMonths.filter((item) => item !== e.target.value));
    }
  };

  const headers = {
    Authorization: window.sessionStorage.getItem("aToken"),
  };

  function submit(e) {
    e.preventDefault();
    console.log("here");
    console.log(dealLink);

    Swal.fire({
      title: "Ready to Upload?",
      showCancelButton: true,
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axios({
          method: "post",
          url: "https://budgetfare.herokuapp.com/admin/addDeal",
          data: {
            dealType: dealType,
            fromId: fromId.value,
            toId: toId.value,
            usualPrice: usualPrice,
            droppedPrice: droppedPrice,
            budgetAirline: budgetAirline,
            nonStop: nonStop,
            dealLink: [dealLink],
          },
          headers: headers,
        })
          .then((res) => {
            console.log(res);
            console.log(res.data.msg);
            if (res.data.messsage) Swal.fire(`${res.data.msg}`, "", "info");
            else Swal.fire(res.data.msg, "", "success");
          })
          .catch((err) => {
            console.log(err);
            window.sessionStorage.setItem("e", err);
            // if(err)  Swal.fire(`${err.message}`, '', 'info')
            // else     Swal.fire('Added!', '', 'success')
          });
      }
    });
  }

  useEffect(() => {
    // console.log(updatedLink);
    if (
      sMonths.length &&
      dealType &&
      fromId &&
      toId &&
      droppedPrice &&
      usualPrice &&
      Object.keys(dealLink)
    )
      setCanSubmit(false);
    else setCanSubmit(true);
    console.log(dealLink);
    // console.log(index);
    console.log(index, dealLink[index]);

  }, [sMonths, dealLink, dealType, fromId, toId, droppedPrice, usualPrice, index]);

  return (
    <form onSubmit={submit}>
      <h3 style={{ fontWeight: "bold" }}> Add Deals </h3>
      <h5>
        {" "}
        Welcome back, Chief <here className=""></here>{" "}
      </h5>

      <MDBRow className="mb-4">
        <MDBCol>
          {/* <MDBInput
            type="text"
            id="form6Example1"
            label="From ID*"
            value={fromId}
            onChange={(e) => {
              setfromId(e.target.value);
            }}
            required
          /> */}

          <Stack gap={2} className="MDBCol-md-10 mx-auto search-bar">
            <Select
              // menuIsOpen
              placeholder="From ID"
              isClearable
              menuShouldScrollIntoView
              // menuIsOpen
              options={fromAirport}
              value={fromId}
              onChange={setfromId}
            />
          </Stack>
        </MDBCol>
        <MDBCol>
          <Stack gap={2} className="MDBCol-md-10 mx-auto search-bar">
            <Select
              // menuIsOpen
              placeholder="To ID"
              isClearable
              menuShouldScrollIntoView
              // menuIsOpen
              options={toAirport.filter((item) => item !== fromId)}
              value={toId}
              onChange={settoId}
            />
          </Stack>
        </MDBCol>
      </MDBRow>

      {/*  */}

      <MDBRow className="mb-4">
        <MDBCol>
          <MDBInput
            type="number"
            id="form6Example4"
            label="Dropped Price*"
            value={droppedPrice}
            onChange={(e) => {
              setdroppedPrice(e.target.value);
            }}
            required
          />
        </MDBCol>
        <MDBCol>
          <MDBInput
            className="mb-4"
            type="number"
            id="form6Example5"
            label="Usual Price*"
            value={usualPrice}
            onChange={(e) => {
              setusualPrice(e.target.value);
            }}
            required
          />
        </MDBCol>
      </MDBRow>

      {/*  */}

      <MDBRow className="mb-4">
        <MDBCol>
          <MDBDropdown
            options={{
              modifiers: [
                {
                  name: "offset",
                  options: {
                    offset: [10, 20],
                  },
                },
              ],
            }}
          >
            <MDBDropdownToggle color="light" type="button" block>
              {" "}
              {dealType}{" "}
            </MDBDropdownToggle>
            <MDBDropdownMenu>
              <MDBDropdownItem>
                <MDBBtn
                  color="light"
                  onClick={(e) => {
                    setdealType("domestic");
                  }}
                  block
                >
                  {" "}
                  Domestic{" "}
                </MDBBtn>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBBtn
                  color="light"
                  onClick={(e) => {
                    setdealType("business");
                  }}
                  block
                >
                  {" "}
                  Global{" "}
                </MDBBtn>
              </MDBDropdownItem>
              <MDBDropdownItem>
                <MDBBtn
                  color="light"
                  onClick={(e) => {
                    setdealType("international");
                  }}
                  block
                >
                  {" "}
                  International{" "}
                </MDBBtn>
              </MDBDropdownItem>
            </MDBDropdownMenu>
          </MDBDropdown>
        </MDBCol>

        <MDBCol className="checkbox-col">
          <MDBCheckbox
            name="budgetAirline"
            value=""
            id="flexCheckDefault"
            label="Budget Airline"
            onChange={(e) => {
              console.log(e.target.checked);
              setbudgetAirline(e.target.checked);
            }}
          />
        </MDBCol>

        <MDBCol className="checkbox-col">
          <MDBCheckbox
            name="nonStop"
            value=""
            id="flexCheckDefault"
            label="Non Stop"
            onChange={(e) => {
              console.log(e.target.checked);
              setnonStop(e.target.checked);
            }}
          />
        </MDBCol>
      </MDBRow>

      <h6 style={{ textAlign: "left" }}> Deal Link: </h6>

      <p>
        <MDBRow className="mb-4">
          {months.map((i, key) => {
            return (
              <MDBCol className="checkbox-col">
                <MDBCheckbox
                  name={i}
                  label={i}
                  value={i}
                  onChange={handleMonth}
                />
              </MDBCol>
            );
          })}
        </MDBRow>
      </p>

      {sMonths.length
        ? sMonths.map((i, index) => {
            return (
              <div className="input-group mb-3">
                <span
                  className="input-group-text border-0"
                  id="basic-addon3"
                  style={{ textTransform: "capitalize" }}
                >
                  {" "}
                  {i} :{" "}
                </span>
                <input
                  required
                  type="url"
                  value={Object.keys(dealLink) ? dealLink[String(i)] : ""}
                  name={i}
                  key={index}
                  label={index}
                  onChange={handlePrice}
                  className="form-control rounded"
                  id="basic-url3"
                  aria-describedby="basic-addon3"
                />
              </div>
            );
          })
        : null}

      <MDBBtn className="mb-4" type="submit" disabled={canSubmit}>
        Add
      </MDBBtn>
    </form>
  );
}
