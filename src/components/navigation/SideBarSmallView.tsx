import { ReactElement } from "react";
import { styled, Theme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useLocation, useNavigate } from "react-router-dom";
import viewLinks, { ViewLink } from "./navLinks";
import {
  Logout,
  Person,
  Settings,
  SvgIconComponent,
} from "@mui/icons-material";
import { NotificationIcon } from ".";
import { logoutUser } from "../../utils/apiCalls";
import { useDispatch } from "react-redux";
import Drawer from "@mui/material/Drawer";
import { Typography } from "@mui/material";

const drawerWidth = 240;

interface TopBarProps {
  isOpen: boolean;
  handleDrawer: () => void;
  theme: Theme;
}

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-start",
}));

const SideBarSmallView = ({
  isOpen,
  handleDrawer,
  theme,
}: TopBarProps): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      //   variant="persistent"
      anchor="right"
      open={isOpen}
    >
      <DrawerHeader>
        <Typography variant="h5">Habi-Tech</Typography>
        <IconButton onClick={handleDrawer}>
          {theme.direction === "rtl" ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List sx={{ padding: "8px" }}>
        {viewLinks.map((item: ViewLink) => {
          const Icon: SvgIconComponent = item.Icon;
          const isActive = location.includes(item.url);
          return (
            <ListItem
              key={item.id}
              disablePadding
              sx={{
                display: "block",
                background: isActive ? "#1976D2" : "",
                borderRadius: "8px",
              }}
              onClick={(): void => item.clickHandler(navigate)}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: isOpen ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: isOpen ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <Icon sx={{ color: isActive ? "#fff" : "" }} />
                </ListItemIcon>
                <ListItemText
                  primary={item.name}
                  sx={{
                    opacity: isOpen ? 1 : 0,
                    color: isActive ? "#fff" : "",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
        <br />
        <br />
        <br />
        <Divider />
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={(): void => logoutUser(dispatch)}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: isOpen ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isOpen ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Logout />
            </ListItemIcon>
            <ListItemText primary="Logout" sx={{ opacity: isOpen ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={(): void => {}}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: isOpen ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isOpen ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <NotificationIcon />
            </ListItemIcon>
            <ListItemText
              primary="Notifications"
              sx={{ opacity: isOpen ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={(): void => navigate("/profile")}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: isOpen ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isOpen ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Person />
            </ListItemIcon>
            <ListItemText
              primary="User Profile"
              sx={{ opacity: isOpen ? 1 : 0 }}
            />
          </ListItemButton>
        </ListItem>
        <ListItem
          disablePadding
          sx={{ display: "block" }}
          onClick={(): void => navigate("/settings")}
        >
          <ListItemButton
            sx={{
              minHeight: 48,
              justifyContent: isOpen ? "initial" : "center",
              px: 2.5,
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: isOpen ? 3 : "auto",
                justifyContent: "center",
              }}
            >
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" sx={{ opacity: isOpen ? 1 : 0 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBarSmallView;
