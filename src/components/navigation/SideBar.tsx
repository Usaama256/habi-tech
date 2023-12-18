import { ReactElement } from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
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

const drawerWidth = 240;

interface TopBarProps {
  isOpen: boolean;
  handleDrawer: () => void;
  theme: Theme;
}

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // position: "fixed",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SideBar = ({
  isOpen,
  handleDrawer,
  theme,
}: TopBarProps): ReactElement => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  return (
    <Drawer variant="permanent" open={isOpen}>
      <DrawerHeader>
        <Typography variant="h5">Habi-Tech</Typography>
        <IconButton onClick={handleDrawer}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
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

export default SideBar;
