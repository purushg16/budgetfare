import { MDBSwitch } from "mdb-react-ui-kit";
import './noti.css';

export default function Notifications(){
    return(
        <section id="noti">
            <div style={{ display: 'flex', justifyContent:'space-around' }}>
                <p> Get Daily Updates </p>
                <MDBSwitch defaultChecked id='flexSwitchCheckChecked'/>
            </div>
            <div style={{ display: 'flex', justifyContent:'space-around' }}>
                <p> Get Daily Updates </p>
                <MDBSwitch defaultChecked id='flexSwitchCheckChecked'/>
            </div> <div style={{ display: 'flex', justifyContent:'space-around' }}>
                <p> Get Daily Updates </p>
                <MDBSwitch defaultChecked id='flexSwitchCheckChecked'/>
            </div> <div style={{ display: 'flex', justifyContent:'space-around' }}>
                <p> Get Daily Updates </p>
                <MDBSwitch defaultChecked id='flexSwitchCheckChecked'/>
            </div>
        </section>
    )
}