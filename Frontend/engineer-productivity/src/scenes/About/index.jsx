import {Box, useTheme} from "@mui/material";
import {tokens} from "../../theme";
import Header from "../../components/Header";

const About = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="EXPERIENCE" subtitle="Welcome to hear our experience" />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="185px"
        gap="25px"
      >

        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{borderRadius: "2%" }}
        >
        </Box>
      </Box>
    </Box>
  )
}

export default About;