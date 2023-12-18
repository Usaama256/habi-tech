import { ReactElement } from "react";
import { WithNoBars } from "../components/layouts";
import styled from "styled-components";
import sketchyBg from "../assets/gallery/sketchy.png";
import linesBg from "../assets/gallery/lines.png";
import { LoginForm } from "../components/login";

const Login = (): ReactElement => {
  return (
    <WithNoBars>
      <Container
        style={{ backgroundImage: `url(${sketchyBg}), url(${linesBg})` }}
      >
        <div className="col col_1">
          <div className="header">
            <h3>Habi-Tech</h3>
            <p>A perfect solution for your home automation</p>
          </div>
          <LoginForm />
        </div>
        <div className="col col_2"></div>
      </Container>
    </WithNoBars>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* background-image: url("../assets/gallery/sketchy.png"); */

  .col {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .col_1 {
    padding: 0px 40px 0px 100px;
  }
`;
export default Login;
