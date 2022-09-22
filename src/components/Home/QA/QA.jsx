import {
  MDBAccordion,
  MDBAccordionItem,
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import "./QA.css";

export default function QA(props) {
  return (
    <section id="QA">
        <h3 style={{ textAlign: "left" }}> Have any questions? </h3>

        <div className="inner-qa">
          <MDBRow>
            <MDBCol sm={12} md={12} lg={6} className='inner-col'>
              <MDBAccordion>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="Why BudgetFare?"
                  style={{ color: "#4f4f4f", fontFamily: "poppins", padding:'1em', textAlign:'left'}}
                >
                  BudgetFare is your ticket to see the world - on any budget! We
                  search millions of flights each day and alert our users to the
                  best airfares available. Our BudgetFare deals are up to 80
                  percent lower than the usual prices, which means that our
                  average user saves hundreds of dollars on each flight they
                  book. We differentiate ourselves from other services by
                  providing more granular controls of your travel availability
                  throughout the year, allowing you to select regions you’d like
                  to travel to and allowing you to set maximum prices for the
                  airfares you’d like to receive. Our goal is to send you the
                  best deals we can find each day - deals that align with your
                  travel goals, rather than to flood you with notifications of
                  every cheap airfare our system finds.
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBCol>
            <MDBCol sm={12} md={12} lg={6} className='inner-col'>
              <MDBAccordion>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="Which countries does BudgetFare service?"
                  style={{ color: "#4f4f4f", fontFamily: "poppins", padding:'1em', textAlign:'left'}}
                >
                  BudgetFare is currently searching for deals departing from the
                  United States. As the world moves beyond the COVID-19
                  pandemic, we plan to add additional origins in the coming
                  months
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md={12} sm={12} lg={6} className='inner-col'>
              <MDBAccordion>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="Will there be any deals from my home airport?"
                  style={{ color: "#4f4f4f", fontFamily: "poppins", padding:'1em', textAlign:'left'}}
                >
                  We send deals from all major international airports in the
                  United States, so there is a good chance that your city and
                  other near-by airports are available. You can search above on
                  the page to find which airports are currently supported and to
                  see some of our recent deals departing from each origin.
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBCol>
            <MDBCol md={12} sm={12} lg={6} className='inner-col'>
              <MDBAccordion>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="How often will I receive flight deal alerts?"
                  style={{ color: "#4f4f4f", fontFamily: "poppins", padding:'1em', textAlign:'left'}}
                >
                  Great BudgetFare deals can happen anytime, but are also
                  completely outside of our control! As such, we cannot
                  guarantee the frequency you’ll be alerted to new deals. There
                  may be a week when you will not receive any new notifications,
                  and then there will be others when we'll be alerting you to
                  dozens of amazing fares. Rest assured, if there’s a great deal
                  that matches your preferences, you’ll hear about it! We strive
                  to send at least one amazing deal per origin each day, but
                  will not waste your time with mediocre deals. BudgetFares only
                  includes truly great deals, so that you can travel more
                  affordably.
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol md={12} sm={12} lg={6} className='inner-col'>
              <MDBAccordion>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="How far in advance do you send out deals?"
                  style={{ color: "#4f4f4f", fontFamily: "poppins", padding:'1em', textAlign:'left'}}
                >
                  We search for a wide-range of deals departing up to 11 months
                  in the future. Some deals will have sample dates which depart
                  immediately, but a majority of deals will have a range of
                  dates departing from one to eight months in advance. Great
                  flight prices can be found any time, so departure dates of our
                  deals will vary.
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBCol>
            <MDBCol md={12} sm={12} lg={6} className='inner-col'>
              <MDBAccordion>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="What is your refund policy?"
                  style={{ color: "#4f4f4f", fontFamily: "poppins", padding:'1em', textAlign:'left'}}
                >
                  We offer a no-questions-asked, risk-free, 90-day refund
                  policy. Any refund request made within 90 days of your initial
                  BudgetFare subscription purchase will be honored. Simply send an
                  email to team@BudgetFare.com and request a refund from your
                  subscribed email address. BudgetFare stands behind our product
                  and the value that it provides. If you are not receiving value
                  from our amazing flight deals, we would love to hear your
                  feedback and better understand how we can improve our
                  services. You can reach us at feedback@BudgetFare.com with your
                  feedback. All BudgetFare employees have been on at least one
                  amazing BudgetFare trip and we have each personally seen how the
                  service more than pays for itself if you are able to book one
                  international trip per year.
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBCol>
          </MDBRow>
          <MDBRow style={{ justifyContent:'center' }}>
            <MDBBtn 
            style={{ 
              color:'white', 
              background:'#1F413D', 
              width:'auto', 
              fontFamily:'poppins',
              fontWeight: 'bold',
              padding: '2em',
              borderRadius: '10px',
              textTransform: 'capitalize',
              fontSize:'0.9em',
              marginTop:'1.5em'
            }}> 
            Check out our full QA here 
          </MDBBtn>
          </MDBRow>
        </div>
    </section>
  );
}
