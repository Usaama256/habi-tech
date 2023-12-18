import { ReactElement } from "react";
import { WithBarsPresent } from "../components/layouts";

const Gadgets = (): ReactElement => {
  return (
    <WithBarsPresent viewName="Gadgets">
      <div>Gadgets</div>
    </WithBarsPresent>
  );
};

export default Gadgets;
