import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../utils/redux/store";
import { Navigate } from "react-router-dom";

interface Props1 {
  children: ReactElement;
}

export const UserPrivateRoutes = ({ children }: Props1): ReactElement => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return currentUser?.id < 1 ? <Navigate to="/login" /> : children;
};

export const LoginPrivateRoutes = ({ children }: Props1): ReactElement => {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return currentUser.id > 0 ? <Navigate to="/overview" /> : children;
};
