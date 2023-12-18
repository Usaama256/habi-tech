import { ReactElement } from "react";
import { WithBarsPresent } from "../components/layouts";

const Weather = (): ReactElement => {
  return (
    <WithBarsPresent viewName="Weather">
      <div>Weather</div>
    </WithBarsPresent>
  );
};

export default Weather;
