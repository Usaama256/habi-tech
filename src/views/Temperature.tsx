import { ReactElement } from "react";
import { WithBarsPresent } from "../components/layouts";

const Temperature = (): ReactElement => {
  return (
    <WithBarsPresent viewName="Temperature">
      <div>Temperature</div>
    </WithBarsPresent>
  );
};

export default Temperature;
