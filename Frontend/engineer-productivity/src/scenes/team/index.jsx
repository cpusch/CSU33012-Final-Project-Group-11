import {Box, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="TEAM" subtitle="There are our team member" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="185px"
        gap="25px"
      >
      </Box>
    </Box>
  )
}

export default Team;