import React from "react";
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import Logo from "../../assets/images/logos/Statify.png";
import banner from "../../assets/images/bg/bg5.svg";
import { Link } from "react-router-dom";

function LoginPage() {
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
            Sign into your account
          </h5>
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

          <div className="d-flex justify-content-between mx-4 mb-4">
            <MDBCheckbox
              name="flexCheck"
              value=""
              id="flexCheckDefault"
              label="Remember me"
              className="custom-input"
            />
            Forgot password?
          </div>
          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{
              background: "#6842FF",
            }}
          >
            <Link to="/starter" className="nav-link">
              Sign in
            </Link>
          </MDBBtn>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#3b5998" }}
          >
            <MDBIcon fab icon="facebook-f" className="mx-2" />
            Continue with facebook
          </MDBBtn>

          <MDBBtn
            className="mb-4 w-100"
            size="lg"
            style={{ backgroundColor: "#55acee" }}
          >
            <MDBIcon fab icon="twitter" className="mx-2" />
            Continue with twitter
          </MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default LoginPage;
