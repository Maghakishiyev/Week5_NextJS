import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ForecastMain from "../Components/Layout/ForecastMain";
import Navigation from "../Components/Layout/Navigation";
import { isLogin } from "../Components/utils/index";
import Landing from ".";

const Forecast = () => {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (!isLogin()) {
      router.push("/");
    }
  }, [router]);

  return (
    <Fragment>
      <Navigation
        hasButton={true}
        logged={isLoggedIn}
        logedInHandler={(state: boolean) => {
          setIsLoggedIn(state);
          localStorage.removeItem("isLoggedIn");
          router.replace("/");
        }}
      />
      <ForecastMain />
    </Fragment>
  );
};

export default Forecast;
