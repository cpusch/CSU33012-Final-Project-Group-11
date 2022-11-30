import { Box } from "@mui/material";
import Header from "../../components/Header";
import CommitBarChart from "../../components/BarChart";
import CommitLineChart from "../../components/LineCharts";
const Commits = () => {
  return (
    <Box m="20px">
      <Header title="COMMITS" subtitle="Simple Commits Chart" />
      <Box height="75vh">
        <CommitBarChart />
          <CommitLineChart />
      </Box>
    </Box>
  );
};

export default Commits;