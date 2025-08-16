import { useState } from "react";
import { logo } from "../constants";

import { Input } from "../ui";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUserFailer,
  registerUserStart,
  registerUserSucces,
} from "../slice/auth";
import AuthService from "../service/auth";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.auth);

  const loginHandler = async(e) => {
    e.preventDefault();
    dispatch(registerUserStart());

    const user = {
      username: name,
      email,
      password
    }

    try {
      const response = await AuthService.userRegister(user)
      console.log(response);
      dispatch(registerUserSucces());
    } catch (error) {
      dispatch(registerUserFailer());
    }
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
          <h1 className="h3 mb-3 fw-normal">Please register</h1>
          <Input label={"username"} state={name} setState={setName} />

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
            disabled={isLoading}
          >
            {isLoading ? "loading..." : "Register"}
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
