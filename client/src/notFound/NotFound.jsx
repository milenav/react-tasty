import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBNavLink, MDBBtn } from 'mdbreact';

import './NotFound.css'

const NotFound = () => {
  return (


    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
        <div className="notfound">
		<div className="not-found">
			<div className="notfound-404">
				<h1 className="h1-responsive font-weight-bold text-center orange-text">4<span>
        <img src="https://www.konfest.com/wp-content/uploads/2019/05/Konfest-PNG-JPG-Image-Pic-Photo-Free-Download-Royalty-Unlimited-clip-art-sticker-Emoji-Emoticons-Smileys-Yellow-42.png" className="w-50 mt-5 mx-auto d-block" alt={`Not found`}/>
          </span>4</h1>
			</div>
			<h2 className="h2-responsive font-weight-bold text-center">Oops! Page Not Be Found</h2>
			<p className="text-center w-responsive mx-auto my-2">Sorry but the page you are looking for does not exist, have been removed.</p>
			<MDBNavLink to="/">
        <MDBBtn className="white-text">Back to Homepage</MDBBtn>
      </MDBNavLink>

		</div>
	</div>
          
          

        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default NotFound;