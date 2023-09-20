import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { socialUser, User, fetchUsers } from "../../Redux/Slices/UserSlice";
import { Alert, Spin } from "antd";
import { useAppDispatch, useAppSelector } from "../../Hooks/ReduxHook";

const Success: React.FC = () => {
  const [searchParams] = useSearchParams();
  const username = searchParams.get("username");
  const code = searchParams.get("code");

  const [user] = useState<socialUser>({
    username: username || "",
    code: code || "",
  });

  const { loading } = useAppSelector(User);
  const [isFirst, setIsFirst] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      console.log(user);

      dispatch(fetchUsers(user));
    }
  }, [dispatch, isFirst, user]);

  return (
    console.log("success"),
    (
      <>
        {loading ? (
          <Spin />
        ) : (
          <Alert
            message="Success Text"
            description="Success Description Success Description Success Description"
            type="success"
          />
        )}
      </>
    )
  );
};

export default Success;
