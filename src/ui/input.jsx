import { useState } from "react";

const Input = ({label, type = 'text', state, setState}) => {

    

  return (
    <div class="form-floating">
      <input
        type={type}
        className="form-control"
        id="floatingInput"
        placeholder={label}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <label for="floatingInput">{label}</label>
    </div>
  );
};

export default Input;
