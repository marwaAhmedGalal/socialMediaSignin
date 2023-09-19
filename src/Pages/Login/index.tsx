// type Props = {};
import React from "react";
import SocialMediaButtons from "../../Components/SocialMediaButtons/SocialMediaButtons";
import axios_common from "../../Services/api";

const Login: React.FC = () => {
  return (
    console.log(axios_common),
    (
      <div>
        <h1>My Example</h1>
        <SocialMediaButtons formType={"login"} />
      </div>
    )
  );
};

export default Login;
