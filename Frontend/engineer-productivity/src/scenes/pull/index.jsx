import { Box } from "@mui/material";
import Header from "../../components/Header";
import PullRequest from "../../components/PullRequest";

const Pull = () => {
  return (
    <Box m="20px">
      <Header title="PULL REQUESTS" subtitle="Pull requests made by the team, measured per month over the last 5 months, represented by a bar chart" />
      <Box height="75vh">
        <PullRequest />
      </Box>
    </Box>
  );
};

export default Pull;