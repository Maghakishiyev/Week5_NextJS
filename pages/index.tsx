import { type } from "os";
import React, { Fragment, useState, useEffect } from "react";
import LandingMain from "../Components/Layout/LandingMain";
import Navigation from "../Components/Layout/Navigation";

const Landing: React.FC<{}> = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  let storedUserInfo: string = "";
  if (typeof window !== "undefined") {
    storedUserInfo = localStorage.getItem("isLoggedIn") || "";
  }
  useEffect(() => {
    if (storedUserInfo === "1") {
      setIsLoggedIn(true);
    }
  }, [storedUserInfo]);

  return (
    <Fragment>
      <Navigation
        hasButton={true}
        logged={isLoggedIn}
        logedInHandler={(state: boolean) => {
          setIsLoggedIn(state);
          localStorage.removeItem("isLoggedIn");
        }}
      />
      <LandingMain />
    </Fragment>
  );
};

export default Landing;
