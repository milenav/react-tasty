import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const NotFound = () => {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <img src="https://www.konfest.com/wp-content/uploads/2019/05/Konfest-PNG-JPG-Image-Pic-Photo-Free-Download-Royalty-Unlimited-clip-art-sticker-Emoji-Emoticons-Smileys-Yellow-42.png" className="w-50 mt-5 mx-auto d-block" alt={`Not found`}/>
          <div className="mt-3 text-center">Not Found 404</div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default NotFound;