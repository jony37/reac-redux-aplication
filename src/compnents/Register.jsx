import { useState } from "react";
import { logo } from "../constants";

import { Input } from "../ui";

const Register = () => {
  // const [userData] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  const [name, setName] = useState('')
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')

  return (
    <div className="text-center mt-5 pt-3">
      <main class="form-signin  m-auto" style={{ width: "320px" }}>
        <form>
          <img
            class="mb-4"
            src={logo}
            alt=""
            width="72"
            height="70"
            style={{ borderRadius: "30px" }}
          />
          <h1 class="h3 mb-3 fw-normal">Please register</h1>
          <Input label={"username"} state={name} setState={setName}/>

          <Input label={"Email address"} state={email} setState={setEmail}/>

          <Input label={"Password"} type={"password"} state={password} setState={setPassword}/>

          <button class="btn btn-primary w-100 py-2 mt-3" type="submit">
            Register
          </button>
        </form>
      </main>
    </div>
  );
};

export default Register;
