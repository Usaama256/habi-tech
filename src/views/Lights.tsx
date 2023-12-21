import { ReactElement } from "react";
import { WithBarsPresent } from "../components/layouts";
import styled from "styled-components";
import { SummaryLights } from "../components/lights";

const Lights = (): ReactElement => {
  return (
    <WithBarsPresent viewName="Lights">
      <Container>
        <div className="col_1">
          <SummaryLights isSummary={false} />
        </div>
        <div className="col_2"></div>
        <div className="col_3"></div>
      </Container>
    </WithBarsPresent>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 3fr);
  gap: 30px;

  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default Lights;
