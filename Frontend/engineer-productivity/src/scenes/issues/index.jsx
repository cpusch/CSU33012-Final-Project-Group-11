import { Box } from "@mui/material";
import Header from "../../components/Header";
import Timeline from "../../components/Timeline";

const Issues = () => {
  return (
    <Box m="20px">
      <Header title="GITHUB ISSUES" subtitle="Timeline chart breaking down the time taken to resolve a list of the most recent issues present in the Github repository" />
      <Box height="75vh">
        <Timeline />
      </Box>
    </Box>
  );
};

export default Issues;