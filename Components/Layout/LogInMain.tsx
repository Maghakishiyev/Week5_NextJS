import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";

const LogInMain = () => {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(false);
  const [validMessage, setvalidMessage] = useState<boolean>(true);
  let router = useRouter();

  const emailInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredEmail(event.target.value);
  };

  const passwordInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setEnteredPassword(event.target.value);
  };

  const validChangeHandler = () => {
    setIsValid(
      enteredEmail.trim() !== "" &&
        enteredPassword.trim().length > 0 &&
        enteredEmail.trim().includes("@")
    );
  };

  const SubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (isValid) {
      localStorage.setItem("isLoggedIn", "1");
      router.replace("/");
    } else {
      setvalidMessage(isValid);
    }
  };

  return (
    <Fragment>
      <main id="logInMain">
        <form id="logInForm" onSubmit={SubmitHandler}>
          <div id="wrapper">
            <h1 id="logInH1">Log In</h1>
            <div>
              <div id="emailLabel">
                <label htmlFor="eMail">Email</label>
              </div>

              <div id="emailInput">
                <input
                  type="email"
                  id="eMail"
                  placeholder="Enter your E-mail address"
                  onChange={emailInputChangeHandler}
                />
              </div>
            </div>

            <div>
              <div id="passwordLabel">
                <label htmlFor="password">Password</label>
              </div>

              <div id="passwordInput">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  onChange={passwordInputChangeHandler}
                />
              </div>
            </div>

            {!validMessage && (
              <p id="errorMessage">
                Password or Email address can not be empty
              </p>
            )}

            <div>
              <button id="buttonLog" onClick={validChangeHandler}>
                Log In
              </button>
            </div>
          </div>
        </form>
      </main>
    </Fragment>
  );
};

export default LogInMain;
