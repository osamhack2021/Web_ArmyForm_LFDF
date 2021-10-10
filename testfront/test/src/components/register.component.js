import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
//import { isEmail } from "validator";

import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};
/*
const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};
*/
const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
   // this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeSerial = this.onChangeSerial.bind(this);
    this.onChangeRank = this.onChangeRank.bind(this);
    this.onChangeUnit = this.onChangeUnit.bind(this);


    this.state = {
      username: "",
      //email: "",
      password: "",
      name: "",
      type: "",
      serial: "",
      rank: "",
      unit: "",
      successful: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
/*
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
*/
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  
  onChangeName(e) {
    this.setState({
      name: e.target.value
    });
  }

  onChangeType(e) {
    this.setState({
      type: e.target.value
    });
  }
  onChangeSerial(e) {
    this.setState({
      serial: e.target.value
    });
  }
  onChangeRank(e) {
    this.setState({
      rank: e.target.value
    });
  }
  
  onChangeUnit(e) {
    this.setState({
      unit: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.password,
        this.state.name,
        this.state.type,
        this.state.serial,
        this.state.rank,
        this.state.unit
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          });
        }
      );
    }
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="name">이름</label>
                  <Input
                    type="name"
                    className="form-control"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChangeName}
                    //validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tyoe">병사/간부</label>
                  <Input
                    type="type"
                    className="form-control"
                    name="type"
                    value={this.state.type}
                    onChange={this.onChangeType}
                    //validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="serial">군번</label>
                  <Input
                    type="serial"
                    className="form-control"
                    name="serial"
                    value={this.state.serial}
                    onChange={this.onChangeSerial}
                    //validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="rank">계급</label>
                  <Input
                    type="rank"
                    className="form-control"
                    name="rank"
                    value={this.state.rank}
                    onChange={this.onChangeRank}
                   // validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="unit">unit</label>
                  <Input
                    type="unit"
                    className="form-control"
                    name="unit"
                    value={this.state.unit}
                    onChange={this.onChangeUnit}
                    //validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <button className="btn btn-primary btn-block">Sign Up</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}