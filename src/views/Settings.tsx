import { ReactElement } from "react";
import { WithBarsPresent } from "../components/layouts";

const Settings = (): ReactElement => {
  return (
    <WithBarsPresent viewName="Settings">
      <div>Settings</div>
    </WithBarsPresent>
  );
};

export default Settings;
