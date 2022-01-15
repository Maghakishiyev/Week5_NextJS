import React, { useEffect, useState } from "react";

import { useRouter } from "next/router";
import weather from "../../public/Icons/clouds-summer-weather-5k-1b-1920x1080.jpg";

import Image from "next/image";

const LandingMain = () => {
  const router = useRouter();

  const [isLogged, setIsLogged] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "1") {
      setIsLogged(true);
    }
  }, []);

  const descButtonClickHandler = () => {
    if (isLogged) {
      router.push("/forecast");
    }
  };

  return (
    <main id="landingMain">
      <div id="description">
        <header>Check The Weather Across The World Now</header>
        <div id="cloud">
          <Image src={weather} alt="weather" />
        </div>
        <button
          id="descButton"
          className={isLogged ? "Registered" : "notRegistered"}
          onClick={descButtonClickHandler}
        >
          See The Forecast
        </button>
        <div id="descParagraph">
          <p>
            This website application was created using React. You can check
            world weather forecasts by clicking on the button above. But first
            you have to log in. Otherwise it will not work.
          </p>
        </div>
      </div>
    </main>
  );
};

export default LandingMain;
