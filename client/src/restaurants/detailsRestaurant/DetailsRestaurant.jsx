import React from "react";
import {  MDBRow, MDBCol, MDBCard,  MDBCardBody, MDBIcon, MDBBtn } from "mdbreact";

const DetailsRestaurant = () => {
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
              <h5 className="mb-4">Basic plan</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                  <MDBIcon icon="home" className="indigo-text" />
                </div>
              </div>
              <h2 className="font-weight-bold my-4">59$</h2>
              <p className="grey-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Culpa pariatur id nobis accusamus deleniti cumque hic
                laborum.
              </p>
              <MDBBtn rounded color="indigo">
                Buy now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard className="indigo">
            <MDBCardBody className="white-text">
              <h5 className="mb-4">Premium plan</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                  <MDBIcon icon="users" className="light-blue-text" />
                </div>
              </div>
              <h2 className="font-weight-bold my-4">79$</h2>
              <p>
                Esse corporis saepe laudantium velit adipisci cumque iste
                ratione facere non distinctio cupiditate sequi atque.
              </p>
              <MDBBtn outline rounded color="white">
                Buy now
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
            <MDBCardBody>
              <h5 className="mb-4">Advanced plan</h5>
              <div className="d-flex justify-content-center">
                <div className="card-circle d-flex justify-content-center align-items-center">
                  <MDBIcon far icon="chart-bar" className="indigo-text" />
                </div>
              </div>
              <h2 className="font-weight-bold my-4">99$</h2>
              <p className="grey-text">
                At ab ea a molestiae corrupti numquam quo beatae minima
                ratione magni accusantium repellat eveniet quia vitae.
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

export default DetailsRestaurant;