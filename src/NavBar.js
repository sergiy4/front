import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


// const getNavLinkClassName = ({ isActive, isPending }) =>
//   isPending ? "pending" : isActive ? "active" : "";

export function NavigationBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!localStorage.getItem("userToken")
  );

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    async function fetchCurrentUser() {

      const res = await fetch(`http://localhost:8080/current-user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });
      const userData = await res.json();
      setCurrentUser(userData);
    }
    if (isLoggedIn) {
      fetchCurrentUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
  };

  return (
    <span className="navigation-bar">
      <NavLink to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          Contacts
        </NavLink>
      )}
      {!isLoggedIn && (
        <>
          <NavLink to="/login" >
            Login
          </NavLink>
          <NavLink to="/sign-up" >
            Sign Up
          </NavLink>
        </>
      )}
      {isLoggedIn && (
        <>
          <span className="login-status">
            Logged in as: {currentUser.email}
          </span>
          <button onClick={onLogout}>Log Out</button>
        </>
      )}
    </span>
  );
}
// className={getNavLinkClassName}