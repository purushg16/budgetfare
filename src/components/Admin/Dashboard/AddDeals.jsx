import { MDBBtn, MDBInput } from "mdb-react-ui-kit";

export default function AddDeals() {
    return(
        <form>
                <h3 style={{ marginBottom: "5%", fontWeight: "bold" }}>
                  {" "}
                  AddDeals{" "}
                </h3>
                <h5>
                  {" "}
                  Welcome back, Chief <here className=""></here>{" "}
                </h5>
                <MDBInput
                  className="mb-4"
                  type="email"
                  id="form2Example1"
                  label="Email address"
                />
                <MDBInput
                  className="mb-4"
                  type="password"
                  id="form2Example2"
                  label="Password"
                />

                <MDBBtn

                  type="submit"
                  className="mb-4"
                  color="success"
                  style={{ marginTop: "5%" }}
                >
                  Sign in
                </MDBBtn>
              </form>
    )
}