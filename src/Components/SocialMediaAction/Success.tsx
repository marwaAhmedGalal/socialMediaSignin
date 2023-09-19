import { memo,useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { sendSocialData } from "../../Redux/Slices/UserSlice";
import { Alert, Spin } from "antd";

const Success : React.FC = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const code = searchParams.get("code");
  const { loading } = useSelector((state) => state.user);
  const [isFirst, setIsFirst] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      console.log(username, code);
        dispatch(sendSocialData(username));
    }
    // if (serverToekn != null) {
    //   navigate('/');
    // }
  }, [dispatch, isFirst, loading]);
  return <>{loading ? <Spin/> : 
    <Alert
  message="Success Text"
  description="Success Description Success Description Success Description"
  type="success"
/>
}</>;
}

export default memo(Success);
