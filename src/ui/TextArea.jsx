import React from "react";

const TextArea = ({ label, state, setState,  height = '100px'}) => {
  return (
    <div class="form-floating mb-2">
      <textarea
        class="form-control"
        placeholder={label}
        id="floatingTextarea2"
        value={state}
        onChange={e => setState(e.target.value)}
        style={{height: height}}
      ></textarea>
      <label for="floatingTextarea2">{label}</label>
    </div>
  );
};

export default TextArea;
