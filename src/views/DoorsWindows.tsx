import { ReactElement } from "react";
import { WithBarsPresent } from "../components/layouts";

const DoorsWindows = (): ReactElement => {
  return (
    <WithBarsPresent viewName="Doors & Windows">
      <div>DoorsWindows</div>
    </WithBarsPresent>
  );
};

export default DoorsWindows;
