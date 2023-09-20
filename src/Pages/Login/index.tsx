// type Props = {};
import React from "react";
import SocialMediaButtons from "../../Components/SocialMediaButtons/SocialMediaButtons";
import axios_common from "../../Services/api";
import { Outlet } from "react-router-dom";

const Login: React.FC = () => {
  return (
    console.log(axios_common),
    (
      <div>
        <h1>My Example</h1>
        <SocialMediaButtons formType={"login"} />
        <Outlet />
      </div>
    )
  );
};

export default Login;
