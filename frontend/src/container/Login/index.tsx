import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Api from "shared/components/Api";
import move from "shared/components/move";

import NavBack from "container/component/NavBack";

import "style/Login.scss";

interface Ilogin {
  username: string;
  password: string;
}

function Login() {
  const {
    register,
    setError,
    clearErrors,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const history = useHistory();

  const doLogin = async (data: Ilogin) => {
    Api.login(data)
      .then((info) => {
        localStorage.setItem("user", JSON.stringify(info));
        move(history, "/Main2"); //will be replaced
      })
      .catch((e) =>
        setError("login", { message: "아이디 또는 비밀번호가 잘못되었습니다." })
      );
  };

  return (
    <>
      <NavBack />
      <div>
        <h1>로그인</h1>
        <input
          type="text"
          {...register("username", {
            required: { value: true, message: "입력값이 필요합니다." },
            minLength: {
              value: 4,
              message: "최소 4글자, 최대 20글자로 이루어져야합니다.",
            },
            maxLength: {
              value: 20,
              message: "최소 4글자, 최대 20글자로 이루어져야합니다.",
            },
            onChange: (e) => {
              clearErrors("login");
            },
          })}
          placeholder="아이디"
        />
        {errors.username && errors.username.message}
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "입력값이 필요합니다.",
            },
            onChange: (e) => {
              clearErrors("login");
            },
          })}
          placeholder="비밀번호"
        />
        {errors.password && errors.password.message}
        <br />
        {errors.login && errors.login.message}
        <br />
        <button className="big_button" onClick={handleSubmit(doLogin)}>
          로그인
        </button>
        <div className="login_bottom_layout">
          <button className="link" onClick={() => move(history, "/Signup")}>
            회원가입
          </button>
          <p>또는</p>
          <button
            className="link"
            onClick={() => move(history, "/Findaccount")}
          >
            비밀번호 찾기
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
