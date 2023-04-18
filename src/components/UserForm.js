
import { useRef, useState } from "react";
import { string, func } from "prop-types";


export function UserForm({ title, onSubmit, submitCaption }) {
    const usernameInput = useRef(null);
    const passwordInput = useRef(null);
    const [error, setError] = useState("");
  
    const internalOnSubmit = async () => {
      setError("");
  
      const userData = {
        username: usernameInput.current.value,
        password: passwordInput.current.value,
      };
  
      await onSubmit(userData, setError);
    };
  
    return (
      <div className="user-form">
        <h3>{title}</h3>
        <input
          type="text"
          className="form-username"
          placeholder="jhon"
          ref={usernameInput}
        />
        <input type="password" placeholder="type password" ref={passwordInput} />
  
        <div className="submit-error">{error}</div>
  
        <button className="submit-button" onClick={internalOnSubmit}>
          {submitCaption}
        </button>
      </div>
    );
  }
  