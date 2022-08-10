import { MDBBtn } from "mdb-react-ui-kit";

import './LFooter.css'

export default function LFooter(){

    return(
        <section id="lfooter">
            <h4 style={{marginBottom: '2%'}}> Not seeing the deals you want? </h4>
            <MDBBtn outline color="success"> Edit Settings </MDBBtn>
        </section>
    )

}