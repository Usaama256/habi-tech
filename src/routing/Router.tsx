import { ReactElement } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import {
  Cameras,
  DoorsWindows,
  Gadgets,
  Lights,
  Login,
  Overview,
  Power,
  Profile,
  Security,
  Settings,
  Temperature,
  Weather,
} from "../views";
import { LoginPrivateRoutes, UserPrivateRoutes } from "./PrivateRoutes";

const Router = (): ReactElement => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginPrivateRoutes>
            <Login />
          </LoginPrivateRoutes>
        }
      />
      <Route path="/" element={<Navigate to="/login" />} />
      <Route
        path="/overview"
        element={
          <UserPrivateRoutes>
            <Overview />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/lights"
        element={
          <UserPrivateRoutes>
            <Lights />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/doors"
        element={
          <UserPrivateRoutes>
            <DoorsWindows />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/temp"
        element={
          <UserPrivateRoutes>
            <Temperature />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/weather"
        element={
          <UserPrivateRoutes>
            <Weather />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/security"
        element={
          <UserPrivateRoutes>
            <Security />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/cameras"
        element={
          <UserPrivateRoutes>
            <Cameras />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/power"
        element={
          <UserPrivateRoutes>
            <Power />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/gadgets"
        element={
          <UserPrivateRoutes>
            <Gadgets />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/settings"
        element={
          <UserPrivateRoutes>
            <Settings />
          </UserPrivateRoutes>
        }
      />
      <Route
        path="/profile"
        element={
          <UserPrivateRoutes>
            <Profile />
          </UserPrivateRoutes>
        }
      />
    </Routes>
  );
};

export default Router;
