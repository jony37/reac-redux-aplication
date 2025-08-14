import React, { useState } from "react";
import { logo } from "../constants";
import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import { loginUserStart } from "../slice/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);


  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUserStart());
  };

  return (
    <div className="text-center mt-5 pt-3">
      <main className="form-signin  m-auto" style={{ width: "320px" }}>
        <form>
          <img
            className="mb-4"
            src={logo}
            alt=""
            width="72"
            height="70"
            style={{ borderRadius: "30px" }}
          />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>

          <Input label={"Email address"} state={email} setState={setEmail} />

          <Input
            label={"Password"}
            type={"password"}
            state={password}
            setState={setPassword}
          />

          <button
            className="btn btn-primary w-100 py-2 mt-3"
            type="submit"
            onClick={loginHandler}
            disabled ={isLoading}
          >
            {isLoading ? 'loading...' : "login"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
