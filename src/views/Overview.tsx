import { ReactElement } from "react";
import { WithBarsPresent } from "../components/layouts";
import styled from "styled-components";
import {
  SummaryCameras,
  SummaryDoorsWindows,
  SummaryEnergy,
  SummaryGadgets,
  SummaryLights,
  SummarySecurity,
  SummaryTemperature,
  SummaryWeather,
} from "../components/overview";

const Overview = (): ReactElement => {
  return (
    <WithBarsPresent viewName="Overview">
      <Container>
        <div className="col col_1">
          <SummaryLights isSummary={true} />
          <SummaryTemperature />
          <SummaryWeather />
        </div>
        <div className="col col_2">
          <SummarySecurity />
          <SummaryCameras />
        </div>
        <div className="col col_3">
          <SummaryDoorsWindows />
          <SummaryEnergy />
          <SummaryGadgets />
        </div>
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

  .col {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
  }

  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export default Overview;
