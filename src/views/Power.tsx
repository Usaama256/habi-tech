import { ReactElement } from "react";
import { WithBarsPresent } from "../components/layouts";

const Power = (): ReactElement => {
  return (
    <WithBarsPresent viewName="Power Management">
      <div>Power</div>
    </WithBarsPresent>
  );
};

export default Power;
