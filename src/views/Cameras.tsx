import { ReactElement } from "react";
import { WithBarsPresent } from "../components/layouts";

const Cameras = (): ReactElement => {
  return (
    <WithBarsPresent viewName="Cameras">
      <div>Cameras</div>
    </WithBarsPresent>
  );
};

export default Cameras;
