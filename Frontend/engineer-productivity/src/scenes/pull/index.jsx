import { Box } from "@mui/material";
import Header from "../../components/Header";
import PullRequest from "../../components/PullRequest";

const Pull = () => {
  return (
    <Box m="20px">
      <Header title="PULL" subtitle="This our pull function" />
      <Box height="75vh">
        <PullRequest />
      </Box>
    </Box>
  );
};

export default Pull;