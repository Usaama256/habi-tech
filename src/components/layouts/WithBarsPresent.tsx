import { ReactElement } from "react";

import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import CssBaseline from "@mui/material/CssBaseline";
import { SideBar, TopBar } from "../navigation";
import { RootState } from "../../utils/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../../utils/redux/slices";
import { useMediaQuery } from "react-responsive";
import TopBarSmallView from "../navigation/TopBarSmallView";
import SideBarSmallView from "../navigation/SideBarSmallView";

interface LayoutProps {
  children: ReactElement;
  viewName?: string;
}

const WithBarsPresent = ({ children, viewName }: LayoutProps): ReactElement => {
  const theme: Theme = useTheme();
  const { sidebar } = useSelector((state: RootState) => state.nav);
  const dispatch = useDispatch();
  const isDisplayNarrow880: boolean = useMediaQuery({
    query: "(max-width: 880px)",
  });

  // const [open, setOpen] = useState<boolean>(false);

  // const handleDrawer = (): void => setOpen((prev) => !prev);
  const handleDrawer = (): void => {
    sidebar ? dispatch(closeSidebar()) : dispatch(openSidebar());
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      {isDisplayNarrow880 ? (
        <TopBarSmallView
          isOpen={sidebar}
          handleDrawer={handleDrawer}
          viewName={viewName}
        />
      ) : (
        <TopBar
          isOpen={sidebar}
          handleDrawer={handleDrawer}
          viewName={viewName}
        />
      )}

      {isDisplayNarrow880 ? (
        <SideBarSmallView
          isOpen={sidebar}
          handleDrawer={handleDrawer}
          theme={theme}
        />
      ) : (
        <SideBar isOpen={sidebar} handleDrawer={handleDrawer} theme={theme} />
      )}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: isDisplayNarrow880 ? 2 : 3,
          margin: "30px 0px 0px 0px",
          width: "100%",
          height: "100%",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default WithBarsPresent;
