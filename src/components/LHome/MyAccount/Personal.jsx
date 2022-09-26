import { MDBBtn, MDBCol, MDBIcon, MDBInput, MDBRow, MDBSwitch } from "mdb-react-ui-kit";
// import Notifications from "./Notification";



function Notification(props) {

  console.log(props);

  return(
    <section id="noti">
      <h4
        style={{
          textAlign: "left",
          marginBottom: "1em",
          color: "black",
          fontWeight: "bold",
        }}
      >
        {" "}
        {props.h}{" "}
      </h4>

      <div>
        {props.options.map((opt, index) => {
          return (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p> {opt} </p> 
              <MDBSwitch defaultChecked id="flexSwitchCheckChecked" />
            </div>
          );
        })}
      </div>

    </section>
  )

}

export default function Personal() {
  return (
    <div style={{width:'60%'}}>
      <h4
        style={{
          textAlign: "left",
          marginBottom: "1em",
          color: "black",
          fontWeight: "bold",
        }}
      >
        {" "}
        Profile{" "}
      </h4>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          alignItems: "flex-start",
          marginBottom: "2em",
        }}
      >
        Before you change anything, let's first verify your email!
        <MDBBtn
          style={{
            background: "#2c625c",
            fontFamily: "poppins",
            color: "white",
            textTransform: "capitalize",
            padding: "1em 3em",
            marginTop: "1em",
            fontSize: "medium",
            borderRadius: "10px",
          }}
        >
          {" "}
          Verify Email{" "}
        </MDBBtn>
      </div>

      <div>
        <form style={{ textAlign:'left' }}>
          <label htmlFor="form2Example1" style={{ fontWeight:'bold', color:'black' }}> First Name </label> 
          <MDBInput
            className="mb-4"
            type="email"
            id="form2Example1"
            style={{ padding:'1em' }}
          />
          <label htmlFor="form2Example2" style={{ fontWeight:'bold', color:'black' }}> Last Name </label> 
          <MDBInput
            className="mb-4"
            type="password"
            id="form2Example2"
            style={{ padding:'1em' }}
          />
          <label htmlFor="form2Example3" style={{ fontWeight:'bold', color:'black' }}> Email </label> 
          <MDBInput
            className="mb-4"
            type="password"
            id="form2Example3"
            style={{ padding:'1em' }}
          />
          <a href="#." style={{color:'#153f3a', fontWeight:'bold', fontSize:'small' }}>Need to change your email? Contact our support team!</a>
        <MDBBtn
          style={{
            background: "#2c625c",
            fontFamily: "poppins",
            color: "white",
            textTransform: "capitalize",
            padding: "1em 3em",
            marginTop: "1em",
            fontSize: "medium",
            borderRadius: "10px",
          }}
          type='submit'
        >
          {" "}
          Save Changes
          {" "}
        </MDBBtn>

        </form>
      </div>
      <hr style={{  margin:'5em 0'}} />

      <Notification h='Notification Preferences' options={[ 'Email Notifications' ]} />


      <hr style={{  margin:'5em 0'}} />
      <Notification h='Email Preferences' options={[ 'Deals emails', 'Product emails', 'Marketing emails', 'Promotion emails', 'The Daily Drop emails' ]} />

      <hr style={{  margin:'5em 0'}} />
        <div>
        <MDBBtn
          style={{
            background: "#2c625c",
            fontFamily: "poppins",
            color: "white",
            textTransform: "capitalize",
            padding: "1.2em 3em",
            marginTop: "1em",
            marginRight:'0.6em',
            fontSize: "medium",
            borderRadius: "10px",
          }}
        >
          {" "}
          Reset Password
          {" "}
        </MDBBtn>

        <MDBBtn
          style={{
            fontFamily: "poppins",
            color: "red",
            textTransform: "capitalize",
            padding: "1em 1.5em",
            marginTop: "1em",
            fontSize: "medium",
            borderRadius: "10px",
          }}
          outline
          color="danger"
          
        >
          {" "}
          Delete My Account
          {" "}
        </MDBBtn>
        </div>
    </div>
  );
}
