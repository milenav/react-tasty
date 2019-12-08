import React from 'react';


import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBNavLink
} from 'mdbreact';

function Home() {
  return (
    <div className="mt-5">
      <MDBContainer>
        <MDBRow center middle>
          <MDBCol middle className="half-page column animated fadeInLeft">
            <h2 className="teal-text">Добре дошли в Tasty</h2>

            <p style={{padding:5}}>Разполагаме с богат избор от ресторанти с атрактивно меню, 
                което със сигурност ще отговори на високите очаквания и 
                изисканото небце на всички ценители на вкусната храна.</p>

            <MDBRow className="no-gutters" center>
              <MDBCol size="auto">
                 <MDBNavLink to="/restaurants" style={{ padding: 0 }}>
                  <MDBBtn className="white-text" color="teal accent-4">Виж повече</MDBBtn>
                </MDBNavLink> 
              </MDBCol>
            </MDBRow>
          </MDBCol>

          <MDBCol middle className="image animated fadeInDown">
            <img
              width="500"
              src="https://uploads-ssl.webflow.com/59288f1c25e231517d69659d/5b6aaaef945eff0a4b7d8623_Flying-Pizza-2.png"
              alt="welcome"
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )
}

export default Home;