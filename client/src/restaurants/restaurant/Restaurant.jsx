import React from "react";
import {  MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBBtn } from "mdbreact";

const Restaurant = ({name, logo, kitchens, categgories}) => {
  return (
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our pricing plans
      </h2>
      <p className="grey-text text-center w-responsive mx-auto mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
        error amet numquam iure provident voluptate esse quasi, veritatis
        totam voluptas nostrum quisquam eum porro a pariatur veniam.
      </p>
      <MDBRow>
      <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
  <h5 className="mb-4">{name}</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                  {logo}
                </div>
              </div>
              <h2 className="font-weight-bold my-4">99$</h2>
              <p className="grey-text">
                {kitchens} {categgories}
              </p>
              <MDBBtn rounded color="indigo">
                Buy now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
  );
}

export default Restaurant;