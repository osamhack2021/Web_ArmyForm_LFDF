import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Api from "shared/components/Api/Api";

import NavBack from "container/component/NavBack";

interface IsignUp {
  userid: string;
  passwd: string;
  rank: string;
  name: string;
  unit: string;
}

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const passwd = watch("passwd");

  const history = useHistory();

  const createAccount = async (data: IsignUp) => {
    Api.signup(data)
      .then((info) => {
        localStorage.setItem("user", JSON.stringify(info));
        history.push("/Survey"); //will be replaced
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <NavBack />

      <div>
        <h1>회원가입</h1>
        <input
          type="text"
          {...register("userid", {
            required: { value: true, message: "입력값이 필요합니다." },
            minLength: {
              value: 4,
              message: "최소 4글자, 최대 20글자로 이루어져야합니다.",
            },
            maxLength: {
              value: 20,
              message: "최소 4글자, 최대 20글자로 이루어져야합니다.",
            },
          })}
          placeholder="아이디"
        />
        {errors.userid && errors.userid.message}
        <input
          type="password"
          {...register("passwd", {
            required: { value: true, message: "입력값이 필요합니다." },
            minLength: 8,
            maxLength: 20,
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message:
                "최소 8글자, 최대 20글자, 최소 하나의 문자 및 하나의 숫자로 이루어져야합니다.",
            },
          })}
          placeholder="비밀번호"
        />
        {errors.passwd && errors.passwd.message}
        <input
          type="password"
          {...register("passwdcheck", {
            validate: (value) =>
              value === passwd || "입력하신 비밀번호가 다릅니다.",
          })}
          placeholder="비밀번호 확인"
        />
        {errors.passwdcheck && errors.passwdcheck.message}
        <input
          type="text"
          {...register("rank", {
            required: { value: true, message: "입력값이 필요합니다." },
            maxLength: {
              value: 5,
              message: "최대 5글자 이루어져야합니다.",
            },
          })}
          placeholder="계급"
        />
        {errors.rank && errors.rank.message}
        <input
          type="text"
          {...register("name", {
            required: { value: true, message: "입력값이 필요합니다." },
            maxLength: {
              value: 100,
              message: "최대 100글자로 이루어져야합니다.",
            },
          })}
          placeholder="이름"
        />
        {errors.name && errors.name.message}
        <input
          type="text"
          {...register("unit", {
            required: { value: true, message: "입력값이 필요합니다." },
            maxLength: {
              value: 100,
              message: "최대 100글자로 이루어져야합니다.",
            },
          })}
          placeholder="군"
        />
        {errors.unit && errors.unit.message}
        {/* <input type="text" placeholder="군번" />
        <input type="text" placeholder="소속" />
        <input type="email" placeholder="이메일" /> */}
        <br />
        <button onClick={handleSubmit(createAccount)}>계정 만들기</button>
      </div>
    </>
  );
};

export default Signup;
