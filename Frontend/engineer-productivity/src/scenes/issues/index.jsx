import { Box } from "@mui/material";
import Header from "../../components/Header";
import Timeline from "../../components/Timeline";

const Issues = () => {
  return (
    <Box m="20px">
      <Header title="Issues Chart" subtitle="Simple Timeline Chart" />
      <Box height="75vh">
        <Timeline />
      </Box>
    </Box>
  );
};

export default Issues;