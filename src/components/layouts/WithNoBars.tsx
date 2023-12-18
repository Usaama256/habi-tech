import { ReactElement } from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

interface LayoutProps {
  children: ReactElement;
}

const WithNoBars = ({ children }: LayoutProps): ReactElement => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {children}
    </Box>
  );
};

export default WithNoBars;
