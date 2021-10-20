import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import Api from "shared/components/Api/Api";
import User from "shared/components/User/User";
import NavBack from "container/component/NavBack";

interface IsignUp {
  username: string;
  password: string;
  name: string;
  armyType: string;
  armyUnit: string;
  armyRank: string;
  serialNumber: string;
}

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm();

  const password = watch("password");

  const history = useHistory();

  const createAccount = async (data: IsignUp) => {
    let signupTest = await Api.signup(data)
      .then((info) => {
        localStorage.setItem("user", JSON.stringify(info));
        return info;
      })
      .catch((e) => console.log(e));
    if (signupTest)
      Api.login(data)
        .then((info) => {
          User.parseLogin(JSON.stringify(info));
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
          })}
          placeholder="아이디"
        />
        {errors.username && errors.username.message}
        <input
          type="password"
          {...register("password", {
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
        {errors.password && errors.password.message}
        <input
          type="password"
          {...register("passwordcheck", {
            validate: (value) =>
              value === password || "입력하신 비밀번호가 다릅니다.",
          })}
          placeholder="비밀번호 확인"
        />
        {errors.passwordcheck && errors.passwordcheck.message}
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
        <select
          {...register("armyType", {
            required: { value: true, message: "입력값이 필요합니다." },
          })}
          placeholder="소속 군 종류" /* 육군,해군,공군 */
        >
          <option value="육군">육군</option>
          <option value="해군">해군</option>
          <option value="공군">공군</option>
          <option value="국직">국직</option>
        </select>
        {errors.armyType && errors.armyType.message}
        <input
          type="text"
          {...register("armyUnit", {
            required: { value: true, message: "입력값이 필요합니다." },
            maxLength: {
              value: 100,
              message: "최대 100글자 이루어져야합니다.",
            },
          })}
          placeholder="세부 부대명"
          value={
            "국군지휘통신사령부 사이버네트워크작전센터 네트워크작전대"
          } /* TEST */
        />
        {errors.armyUnit && errors.armyUnit.message}
        <select
          {...register("armyRank", {
            required: { value: true, message: "입력값이 필요합니다." },
          })}
          placeholder="계급"
        >
          {/* 병사 */}
          <option value="이병">이병</option>
          <option value="일병">일병</option>
          <option value="상병">상병</option>
          <option value="병장">병장</option>
          {/* 부사관 */}
          <option value="하사">하사</option>
          <option value="중사">중사</option>
          <option value="상사">상사</option>
          <option value="원사">원사</option>
          {/* 준사관 및 위관*/}
          <option value="준위">준위</option>
          <option value="소위">소위</option>
          <option value="중위">중위</option>
          <option value="대위">대위</option>
          {/* 영관 */}
          <option value="소령">소령</option>
          <option value="중령">중령</option>
          <option value="대령">대령</option>
          {/* 장성 */}
          <option value="준장">준장</option>
          <option value="소장">소장</option>
          <option value="중장">중장</option>
          <option value="대장">대장</option>
          {/* 관리자 */}
          <option value="관리자">관리자</option>
        </select>
        {errors.armyRank && errors.armyRank.message}
        <input
          type="text"
          {...register("serialNumber", {
            required: { value: true, message: "입력값이 필요합니다." },
            maxLength: {
              value: 13,
              message: "최대 13글자로 이루어져야합니다.",
            },
          })}
          placeholder="군번"
        />
        {errors.serialNumber && errors.serialNumber.message}
        <br />
        <button onClick={handleSubmit(createAccount)}>계정 만들기</button>
      </div>
    </>
  );
};

export default Signup;
