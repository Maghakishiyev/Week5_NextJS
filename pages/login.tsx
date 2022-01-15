import { useRouter } from "next/router";
import React, { Fragment, useEffect } from "react";
import Landing from "./index";

import LogInMain from "../Components/Layout/LogInMain";
import Navigation from "../Components/Layout/Navigation";
import { isLogin } from "../Components/utils/index";

const Login = () => {
  const router = useRouter();

  useEffect(() => {
    if (isLogin()) {
      router.push("/");
    }
  }, [router]);

  return (
    <Fragment>
      <Navigation hasButton={false} />
      <LogInMain />
    </Fragment>
  );
};

export default Login;
