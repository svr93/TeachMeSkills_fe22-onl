import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { activate } from "../../features/auth";
import { useAppDispatch } from "../../hooks";

export const Activate: React.FC = () => {
  const { uid, token } = useParams();
  console.log({ uid, token });
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (uid && token) {
      dispatch(activate({ uid, token }));
		console.log("Dispatch was called")
    } else {
      console.error("Activate data is missing");
    }
  }, [dispatch, token, uid]);

  return <div>Выполняется активация пользователя</div>;
};
