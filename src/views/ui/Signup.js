import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBInput,
} from "mdb-react-ui-kit";
import Logo from "../../assets/images/logos/Statify.png";
import banner from "../../assets/images/bg/bg5.svg";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <MDBContainer
      fluid
      className="p-5"
      style={{
        background: "#25293C",
        color: "#ccc",
      }}
    >
      <MDBRow>
        <MDBCol col="10" md="6">
          <img src={banner} class="img-fluid" alt="Phone" />
        </MDBCol>

        <MDBCol col="4" md="6">
          <div className="d-flex flex-row mt-2">
            <img
              src={Logo}
              style={{ height: "50px", color: "#6842FF" }}
              alt="logo"
            />
          </div>
          <h5 className="fw-normal my-4 pb-3" style={{ letterSpacing: "1px" }}>
            Signup
          </h5>
          <MDBInput
            className="custom-input"
            wrapperClass="mb-4"
            label="Full Name"
            id="formControlLg"
            type="text"
            size="lg"
            labelClass="text-white"
          />
          <MDBInput
            className="custom-input"
            wrapperClass="mb-4"
            label="Phone"
            id="formControlLg"
            type="text"
            size="lg"
            labelClass="text-white"
          />
          <MDBInput
            className="custom-input"
            wrapperClass="mb-4"
            label="Email address"
            id="formControlLg"
            type="text"
            size="lg"
            labelClass="text-white"
          />
          <MDBInput
            className="custom-input"
            wrapperClass="mb-4"
            label="Password"
            id="formControlLg"
            type="text"
            size="lg"
            labelClass="text-white"
          />

          <div className="d-flex justify-content-between  mb-4">
            <Link to="/login" className="nav-link">
              Already have an account? Sign in instead
            </Link>
          </div>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{
              background: "#6842FF",
            }}
          >
            <Link to="/starter" className="nav-link">
              Create Account
            </Link>
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignupPage;
