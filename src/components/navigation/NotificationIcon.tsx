import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../utils/redux/store";
import { Badge } from "@mui/material";
import { Notifications } from "@mui/icons-material";

const NotificationIcon = (): ReactElement => {
  const { unreadNumber } = useSelector(
    (state: RootState) => state.notifications
  );

  return (
    <Badge badgeContent={unreadNumber} color="primary">
      <Notifications />
    </Badge>
  );
};

export default NotificationIcon;
