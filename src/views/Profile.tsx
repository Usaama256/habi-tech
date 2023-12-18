import { ReactElement } from "react";
import { WithBarsPresent } from "../components/layouts";

const Profile = (): ReactElement => {
  return (
    <WithBarsPresent viewName="Profile">
      <div>Profile</div>
    </WithBarsPresent>
  );
};

export default Profile;
