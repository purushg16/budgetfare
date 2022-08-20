import { MDBBtn, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Personal() {
    return(
        <>
        <h4 style={{ textAlign: "left", marginBottom: "5%" }}>
        {" "}
        Profile Settings{" "}
      </h4>
      <MDBRow>
        <MDBCol sm={12} md={6} lg={6} style={{ paddingLeft: "3%" }}>
          <div style={{ textAlign: "left", marginBottom: "3%" }}>
            <label for="fname" style={{ paddingBottom: "1%" }}>
              {" "}
              First Name
            </label>
            <br></br>
            <input
              name="fname"
              type="text"
              style={{ padding: "1% 5% 1% 1%" }}
            />
          </div>
          <div style={{ textAlign: "left", marginBottom: "3%" }}>
            <label for="fname" style={{ paddingBottom: "1%" }}>
              {" "}
              Last Name
            </label>
            <br></br>
            <input
              name="fname"
              type="text"
              style={{ padding: "1% 5% 1% 1%" }}
            />
          </div>
          <div style={{ textAlign: "left", marginBottom: "3%" }}>
            <label for="fname" style={{ paddingBottom: "1%" }}>
              {" "}
              Email{" "}
            </label>
            <br></br>
            <input
              name="fname"
              type="email"
              style={{ padding: "1% 5% 1% 1%" }}
            />
          </div>
        </MDBCol>

        <MDBCol
          sm={12}
          md={6}
          lg={6}
          style={{ paddingLeft: "3%", textAlign: "left" }}
        >
          <label htmlFor="password" style={{ paddingBottom: "1%" }}>
            {" "}
            Password{" "}
          </label>
          <br></br>
          <input
            name="password"
            type="password"
            style={{ padding: "1% 5% 1% 1%"}}
          />
          <br></br>

          <div
            style={{
              textAlign: 'right',
              marginTop: "5%",
              marginBottom: "3%",
            }}
          >
            <MDBBtn
              color="success"
              style={{ marginBottom: "3%" }}
            > Change Password</MDBBtn>
            <br></br>
            <MDBBtn
              color="danger"
              outline
              // style={{ padding: "3%", marginRight: "3%" }}
            >
              Delete Account
            </MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
        </>
    );
}

