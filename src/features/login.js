import { useNavigate } from "react-router-dom";
import { UserForm } from "../components/UserForm.js";

export function LoginPage() {
  const navigate = useNavigate();

  const onSubmit = async (userData, setError) => {
    const res = await fetch(`http://localhost:8080/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (res.status >= 400) {
      setError(data.error);
    } else {
      localStorage.setItem("userToken", data.token);
      navigate("/shop");
    }
  };

  return (
    <UserForm
      title="Please, Log In"
      onSubmit={onSubmit}
      submitCaption="Log In"
    />
  );
}

