import { ReactElement, useState } from "react";
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

// ----------------------------------------------------------------------

const LoginForm = (): ReactElement => {
  const navigate: NavigateFunction = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Container>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
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
        onClick={() => false}
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
