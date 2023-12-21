import { ChangeEvent, ReactElement, useState } from "react";
import {
  Link,
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { NavigateFunction, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../utils/apiCalls";
import { UserLogin } from "../../utils/types";
import { useSnackbar } from "notistack";
import { validateEmail } from "../../utils/commonMethods";
import { RootState } from "../../utils/redux/store";

const LoginForm = (): ReactElement => {
  const { isFetching } = useSelector((state: RootState) => state.user);
  const navigate: NavigateFunction = useNavigate();
  const dispatch: Dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const emailHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    return setEmail(e.target.value);
  };

  const passHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    return setPass(e.target.value);
  };

  const loginHandler = async (): Promise<void> => {
    try {
      if (isFetching || email.length < 10) {
        return;
      }
      if (!validateEmail(email) || pass.length < 8) {
        enqueueSnackbar("Login Failed UL1: Wrong User Credentials", {
          variant: "warning",
        });
        return;
      }
      const user: UserLogin = { pass, email };
      const res = await loginUser(dispatch, navigate, user);
      if (res) {
        enqueueSnackbar("Login Successful", { variant: "success" });
      } else {
        enqueueSnackbar(
          "Login Failed UL2: Wrong User Credentials Or A Connection Issue",
          {
            variant: "error",
          }
        );
      }
    } catch (err) {
      console.log(err);
      enqueueSnackbar(
        "Login Failed UL3: Wrong User Credentials Or A Connection Issue",
        {
          variant: "error",
        }
      );
    }
  };

  return (
    <Container>
      <Stack spacing={3}>
        <TextField
          name="email"
          label="Email address"
          value={email}
          onChange={emailHandler}
          disabled={isFetching}
        />

        <TextField
          name="password"
          label="Password"
          value={pass}
          onChange={passHandler}
          disabled={isFetching}
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        {/* <Checkbox checked={true} name="remember" label="Remember me" /> */}
        <Link
          variant="subtitle2"
          underline="hover"
          sx={{ color: "#141414", cursor: "pointer", textDecoration: "none" }}
        >
          Forgot password?
        </Link>
      </Stack>

      <Button
        fullWidth
        size="large"
        color="inherit"
        variant="outlined"
        onClick={loginHandler}
        disabled={isFetching}
      >
        Login
      </Button>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: -20px;
`;

export default LoginForm;
