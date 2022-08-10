import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";

import './Controls.css'

export default function ControlBar() {
  return (
      <section id="control">
      <div id="control-bar">
        <div className="controls-div">
          <div>
            <p> <MDBIcon fas icon="home" /> <br></br> Home </p>
          </div>
          <div>
          <p> <MDBIcon fas icon="cogs" /> <br></br> Settings </p>

          </div>
          <div>
          <p><MDBIcon fas icon="user-alt" /><br></br> Account </p>

          </div>
        </div>
      </div>
      </section>
  );
}
